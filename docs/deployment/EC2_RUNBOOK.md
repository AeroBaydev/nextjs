# AeroBay EC2 deployment runbook

Use a supported Ubuntu LTS image. A small instance is feasible when the website and admin are static and MySQL is external (RDS or another managed MySQL host). Do not place MySQL, two API processes, Nginx, and builds on a 1 GB instance. Start with 2 GB RAM (`t3.small`) plus swap for runtime-only deployment; use `t3.medium` if MySQL must run locally.

## DNS and process map

| Host | Destination |
| --- | --- |
| `aerobay.in`, `www.aerobay.in` | EC2 Elastic IP, Nginx static website |
| `admin.aerobay.in` | EC2 Elastic IP, Nginx static admin SPA |
| `api.aerobay.in` | EC2 Elastic IP, Nginx to `127.0.0.1:5050` |
| `demo.aerobay.in` | Vercel staging deployment |
| `demo-api.aerobay.in` | EC2 Elastic IP, Nginx to isolated `127.0.0.1:5051` |

## Required controls

1. Back up and restore-test MySQL before the role/email migration.
2. Create separate production and demo databases and least-privilege users.
3. Store `/etc/aerobay/api.env` and `demo-api.env` as root-owned mode `0600`; never commit them. Set `UPLOAD_DIR=/srv/aerobay/shared/uploads` and `PUBLIC_API_URL=https://api.aerobay.in`.
4. Build website/admin in CI or on a larger builder, then upload only `out/` and `build/` artifacts.
5. Install API dependencies with `npm ci --omit=dev` on the target Linux release directory.
6. Run migrations once from a recorded release, then switch the `current` symlink atomically.
7. Validate Nginx with `nginx -t`, reload, and smoke-test `/health/live` and `/health/ready`.
8. Issue TLS certificates before enabling HSTS. Test automatic renewal.
9. Security group: public 80/443 only; use Systems Manager or restrict SSH to a trusted IP.
10. Configure CloudWatch alarms for status checks, CPU, memory, disk, API health, and 5xx rates. Back up `/srv/aerobay/shared/uploads` alongside the database or move media to S3 before scale-out.

Production CORS must be `https://admin.aerobay.in,https://aerobay.in`. Demo CORS must use only its Vercel/demo admin origins. Use independent JWT secrets for each environment.

## Release layout

```text
/srv/aerobay/
  current -> /srv/aerobay/releases/20260822-120000
  releases/
    20260822-120000/
      website/
      admin/
      api/
  shared/
```

Keep at least the two previous releases. Rollback switches `current` to the prior release and restarts the API; database rollback is a separate, explicitly reviewed operation.
