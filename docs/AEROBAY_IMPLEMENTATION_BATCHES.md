# AeroBay Implementation Batches and TODO

Status: Implementation in progress  
Last updated: 2026-08-22  
Applications in scope: `nextjs`, `BackendReact`, `BackendNode`

## 1. Target outcome

The completed platform will provide:

| URL | Purpose | Runtime |
| --- | --- | --- |
| `https://aerobay.in` | Production marketing website | Next.js static build served by Nginx on EC2 |
| `https://admin.aerobay.in` | Production admin dashboard | React static build served by Nginx on EC2 |
| `https://api.aerobay.in` | Production API | Express on EC2, available only through Nginx |
| `https://demo.aerobay.in` | Persistent website QA environment | Vercel deployment from `staging` |
| Vercel-generated preview URLs | Per-feature review | Vercel deployment from `batch/*` branches |
| `https://demo-api.aerobay.in` | Isolated demo API | Separate API process and demo database |

The production and demo environments must never share database credentials, JWT secrets, administrator accounts, uploads, or customer data.

## 2. Branch and release workflow

Use the same branch names in all three existing repositories until an optional monorepo migration is completed.

```text
main
  Production-ready code only

staging
  Persistent integration branch
  Website is assigned to demo.aerobay.in on Vercel

batch/01-repository-security
batch/02-backend-security
batch/03-admin-security
batch/04-demo-environment
batch/05-tests
batch/06-website-performance
batch/07-aws-deployment
```

Workflow for every batch:

1. Create `batch/<number>-<name>` from `staging`.
2. Implement and test the batch locally.
3. Push the branch and review the Vercel Preview deployments.
4. Open a pull request into `staging`.
5. Run automated checks and manual acceptance testing.
6. Merge into `staging` only after its acceptance gate passes.
7. Keep `staging` deployed at `demo.aerobay.in`.
8. Merge `staging` into `main` only for a controlled production release.

No direct pushes should be allowed to `main` after branch protection is enabled.

## 3. Vercel testing design

Create two Vercel projects initially:

| Vercel project | Git repository/root | Production branch | Staging behavior |
| --- | --- | --- | --- |
| AeroBay Website Preview | `nextjs` repository | `main` | Assign `demo.aerobay.in` to `staging` |
| AeroBay Admin Preview | `BackendReact` repository | `main` | Use branch URL or `admin-demo.aerobay.in` |

Configure branch-scoped Preview variables:

### Website `staging`

```text
NEXT_PUBLIC_SITE_URL=https://demo.aerobay.in
NEXT_PUBLIC_API_URL=https://demo-api.aerobay.in/api
NEXT_PUBLIC_ENVIRONMENT=demo
```

### Admin `staging`

```text
REACT_APP_API_URL=https://demo-api.aerobay.in/api
REACT_APP_ENVIRONMENT=demo
GENERATE_SOURCEMAP=false
```

Rules:

- Never place production secrets in Vercel Preview variables.
- Protect admin previews with Vercel Deployment Protection where available.
- Add `noindex, nofollow` to website and admin demo deployments.
- Feature branches use generated Vercel URLs.
- The persistent `staging` branch always uses the demo API and demo database.
- Do not point preview applications at `api.aerobay.in`.

The current Express application should remain outside Vercel during the first implementation cycle. Its process model, MySQL connection handling, secrets, and authentication should be hardened before evaluating a Vercel Function deployment.

## 4. Batch 00 - Safety, access and backups

Goal: make the work recoverable before changing authentication, repositories, or database configuration.

Estimated duration: 0.5-1 day

- [ ] B00-01 Confirm who controls DNS for `aerobay.in`.
- [ ] B00-02 Confirm access to Git hosting for all three repositories.
- [ ] B00-03 Confirm access to the current MySQL server and identify whether it contains production data.
- [ ] B00-04 Take and verify a MySQL backup.
- [ ] B00-05 Record current production environment settings in an approved password manager.
- [ ] B00-06 Identify all administrators and remove unknown or obsolete accounts.
- [ ] B00-07 Confirm ownership of the EC2 key and rotate it if it has been shared.
- [x] B00-08 Create `staging` branches in all three repositories.
- [ ] B00-09 Enable pull-request review and branch protection for `main`.
- [ ] B00-10 Document the rollback contact and decision maker for production releases.

Acceptance gate:

- A verified database restore is possible.
- Required Git, DNS, AWS, Vercel, and database access is available.
- No code changes begin without recoverable backups.

## 5. Batch 01 - Repository and secret security

Goal: remove deploy-time contamination and all credentials from tracked application code.

Estimated duration: 1-2 days

### Backend

- [x] B01-01 Add a backend `.gitignore` covering `.env*`, `node_modules`, `dist`, logs, coverage, editor files, and operating-system files.
- [x] B01-02 Preserve a tracked `.env.example` containing variable names and safe examples only.
- [x] B01-03 Stop tracking the backend `.env` file.
- [x] B01-04 Stop tracking all 10,669 backend `node_modules` files.
- [x] B01-05 Stop tracking generated `dist` files and source maps.
- [x] B01-06 Replace plaintext Sequelize configuration with environment variables.
- [x] B01-07 Remove the fallback JWT secret from controllers and middleware.
- [x] B01-08 Add environment validation that refuses to start when required values are absent.
- [x] B01-09 Correct production scripts so `start` uses Node, not Nodemon.
- [x] B01-10 Move build-only packages to `devDependencies` where appropriate.

### Website

- [x] B01-11 Remove the hard-coded bearer JWT from `src/lib/api.js`.
- [x] B01-12 Move the API base URL to `NEXT_PUBLIC_API_URL`.
- [x] B01-13 Track `package-lock.json` and remove the rule that ignores it.
- [x] B01-14 Rename the package from `aropay` to an AeroBay-specific name.

### Admin

- [x] B01-15 Remove the prefilled login password.
- [x] B01-16 Move the API base URL to `REACT_APP_API_URL`.
- [x] B01-17 Generate and track a clean `package-lock.json`.
- [x] B01-18 Replace the template GitHub workflow and stale Genezio configuration with project-owned configuration or remove them.

### Credential rotation

- [ ] B01-19 Rotate the production MySQL password.
- [ ] B01-20 Generate and install a strong production JWT secret.
- [ ] B01-21 Rotate every current admin password.
- [ ] B01-22 Invalidate all previously issued JWTs.
- [ ] B01-23 Decide whether Git history must be rewritten based on repository visibility and access history.

Acceptance gate:

- Secret scanning reports no application credentials.
- Fresh clones install through `npm ci`.
- Windows `node_modules` are not part of deployment artifacts.
- All old credentials and sessions are invalid.

## 6. Batch 02 - Backend authentication and API security

Goal: make the backend safe enough for an internet-facing demo environment.

Estimated duration: 3-5 days

- [x] B02-01 Remove unauthenticated `POST /api/users` access.
- [x] B02-02 Remove or disable public administrator registration.
- [x] B02-03 Add roles such as `super_admin`, `admin`, and `editor`.
- [x] B02-04 Add role-based authorization middleware.
- [ ] B02-05 Restrict user creation, updates, listing, and deletion to `super_admin`.
- [x] B02-06 Prevent administrators from deleting their own final super-admin account.
- [x] B02-07 Exclude password hashes from every API response.
- [x] B02-08 Check account status during login and authenticated requests.
- [x] B02-09 Add request validation for params, queries, and bodies.
- [x] B02-10 Add maximum pagination limits and reject invalid pagination.
- [x] B02-11 Add Helmet and explicit security headers.
- [x] B02-12 Replace wildcard CORS with environment-specific allowlists.
- [x] B02-13 Add rate limiting to login and public contact endpoints.
- [ ] B02-14 Add bot/spam protection to public contact submissions.
- [x] B02-15 Add explicit JSON request-size limits.
- [ ] B02-16 Stop returning internal error messages or stack information.
- [x] B02-17 Add request IDs and structured, redacted logging.
- [x] B02-18 Add `/health/live` and `/health/ready` endpoints.
- [x] B02-19 Add graceful HTTP and database shutdown.
- [x] B02-20 Fix user uniqueness checks and enforce unique email in MySQL.
- [x] B02-21 Review update hooks so unchanged passwords are not re-hashed.
- [x] B02-22 Validate and normalize contact numbers, emails, links, and text fields.
- [x] B02-23 Upgrade Express, Sequelize, bcrypt, and affected transitive dependencies.
- [x] B02-24 Run `npm audit --omit=dev` and document any accepted residual findings.

Acceptance gate:

- Anonymous visitors cannot create users or access admin data.
- Role tests prove unauthorized CRUD operations return 403.
- API responses never contain password fields.
- Login and contact rate limits work.
- CORS allows only the configured production or demo origins.
- Backend production dependency audit has no unresolved critical findings.

## 7. Batch 03 - Admin authentication and reliability

Goal: make the admin dashboard safe and usable against the hardened backend.

Estimated duration: 2-4 days

- [x] B03-01 Remove `/auth/register` from the router and UI.
- [x] B03-02 Remove all credential, token, form-value, and user-object console logging.
- [x] B03-03 Replace token-presence route checks with verified session behavior.
- [x] B03-04 Prefer secure HttpOnly, Secure, SameSite session cookies.
- [ ] B03-05 If JWT storage remains temporarily, use short lifetimes and document the migration deadline.
- [x] B03-06 Add reliable logout and expired-session handling.
- [x] B03-07 Add role-aware menus and route authorization.
- [ ] B03-08 Add loading, empty, validation, and API-error states to every CRUD screen.
- [ ] B03-09 Add destructive-action confirmation dialogs.
- [ ] B03-10 Prevent double form submissions.
- [ ] B03-11 Add an application error boundary.
- [x] B03-12 Add `noindex, nofollow` metadata.
- [ ] B03-13 Upgrade vulnerable dependencies and rebuild the dashboard.
- [x] B03-14 Ensure SPA fallback routing works through Vercel and Nginx.

Acceptance gate:

- Registration is unavailable in both UI and API.
- An expired or invalid session returns the user safely to login.
- Admin navigation reflects backend permissions.
- Refreshing any `/admin/*` route does not produce a 404.
- No credentials or tokens appear in logs or build output.

## 8. Batch 04 - Demo environment and Vercel previews

Goal: establish an isolated, repeatable QA environment.

Estimated duration: 1-3 days

- [ ] B04-01 Create the Vercel website project.
- [ ] B04-02 Connect the `nextjs` repository and verify feature-branch previews.
- [ ] B04-03 Assign `demo.aerobay.in` to the `staging` branch.
- [ ] B04-04 Create the Vercel admin project.
- [ ] B04-05 Connect the `BackendReact` repository and verify feature-branch previews.
- [ ] B04-06 Configure branch-scoped Preview environment variables.
- [ ] B04-07 Create a separate demo MySQL database and restricted database user.
- [ ] B04-08 Create a separate demo API configuration and JWT secret.
- [ ] B04-09 Deploy the demo API as a separate process or isolated service.
- [ ] B04-10 Configure `demo-api.aerobay.in` and TLS.
- [ ] B04-11 Allow demo frontend origins in demo CORS only.
- [ ] B04-12 Seed demo-safe users, jobs, categories, and testimonials.
- [ ] B04-13 Add Basic Auth or Vercel Deployment Protection where appropriate.
- [ ] B04-14 Add visible Demo/Non-production indicators.
- [ ] B04-15 Verify robots metadata prevents indexing.

Acceptance gate:

- A change pushed to `staging` updates `demo.aerobay.in` automatically.
- A feature branch receives its own review URL.
- Demo actions cannot read or modify production data.
- Demo credentials cannot authenticate against production.

## 9. Batch 05 - Automated tests and quality gates

Goal: make every subsequent batch verifiable before merge.

Estimated duration: 3-5 days

- [x] B05-01 Add backend unit tests for validation, authentication, and authorization.
- [ ] B05-02 Add backend integration tests for all public and protected routes.
- [ ] B05-03 Add tests proving password fields never appear in responses.
- [ ] B05-04 Add admin component tests for login, logout, guards, and CRUD errors.
- [ ] B05-05 Add website form and API integration tests.
- [ ] B05-06 Add Playwright end-to-end tests for website contact, admin login, and one CRUD workflow.
- [x] B05-07 Add lint, build, test, and production dependency-audit CI foundations.
- [ ] B05-08 Require CI checks before merging to `staging` or `main`.
- [ ] B05-09 Create smoke tests for the persistent demo URLs.
- [ ] B05-10 Store test artifacts and screenshots for failed runs.

Acceptance gate:

- Pull requests cannot merge while required checks fail.
- Authentication, authorization, contact submission, and core admin CRUD have automated coverage.
- Demo smoke tests run after deployment.

## 10. Batch 06 - Website correctness and performance

Goal: reduce transfer size and resolve public-site launch issues.

Estimated duration: 3-6 days

- [ ] B06-01 Remove unused ZIP archives and duplicate public assets.
- [ ] B06-02 Resize oversized team and banner images.
- [ ] B06-03 Convert suitable images to WebP or AVIF.
- [ ] B06-04 Re-encode videos for web delivery and add poster images.
- [ ] B06-05 Move large videos/media to S3 and CloudFront if approved.
- [ ] B06-06 Re-enable appropriate image optimization or pre-optimize static assets.
- [ ] B06-07 Fix all current lint warnings.
- [ ] B06-08 Replace React `class` attributes with `className`.
- [ ] B06-09 Fix empty and `#` links.
- [ ] B06-10 Change the LMS link to HTTPS after confirming LMS TLS.
- [ ] B06-11 Implement or remove the newsletter form.
- [ ] B06-12 Add meaningful alternative text and iframe titles.
- [ ] B06-13 Add page-specific metadata and social previews.
- [ ] B06-14 Upgrade Next.js, Axios, Swiper, and other affected dependencies.
- [ ] B06-15 Run Lighthouse against mobile and desktop demo pages.

Acceptance gate:

- The production website build succeeds without lint errors.
- No critical dependency advisories remain unresolved.
- Large unused assets are absent from the output.
- Agreed Lighthouse and Core Web Vitals targets are met on demo.

## 11. Batch 07 - AWS EC2 production deployment

Goal: deploy a secure and recoverable production stack.

Estimated duration: 2-4 days

- [ ] B07-01 Create Ubuntu LTS EC2 and associate an Elastic IP.
- [ ] B07-02 Choose `t3.medium` when MySQL is local, or `t3.small` when using RDS.
- [ ] B07-03 Configure the security group for public 80/443 only.
- [ ] B07-04 Restrict SSH to an approved IP or use AWS Systems Manager.
- [ ] B07-05 Install supported Node.js LTS, Nginx, and required system packages.
- [ ] B07-06 Create a non-root deployment/service account.
- [ ] B07-07 Create `/srv/aerobay` release and shared-config directories.
- [ ] B07-08 Configure Nginx for website, admin, API, and demo API hostnames.
- [ ] B07-09 Bind Node processes to loopback only.
- [ ] B07-10 Configure ACME TLS certificates and automatic renewal.
- [ ] B07-11 Add HSTS and application security headers after HTTPS verification.
- [ ] B07-12 Run the API through `systemd` or PM2 with restart and memory limits.
- [ ] B07-13 Configure MySQL/RDS TLS, least-privilege users, backups, and retention.
- [ ] B07-14 Configure log rotation and disk-space monitoring.
- [ ] B07-15 Add CloudWatch metrics/alarms for CPU, memory, disk, process health, and HTTP errors.
- [ ] B07-16 Build artifacts in CI and deploy immutable releases.
- [ ] B07-17 Add atomic `current` symlink switching and rollback scripts.
- [ ] B07-18 Configure Route 53/DNS records after pre-production verification.

Acceptance gate:

- Only Nginx is internet-facing.
- TLS renewal has been tested.
- Database backup and restore have been tested.
- A previous application release can be restored quickly.
- Health checks and alarms are active.

## 12. Batch 08 - Production launch and operations

Goal: release safely and establish ongoing ownership.

Estimated duration: 1-2 days plus observation period

- [ ] B08-01 Freeze non-launch changes.
- [ ] B08-02 Take a fresh production database backup.
- [ ] B08-03 Run migrations with a recorded rollback procedure.
- [ ] B08-04 Deploy API, admin, then website.
- [ ] B08-05 Run production smoke and end-to-end tests.
- [ ] B08-06 Verify forms, jobs, testimonials, login, CRUD, logout, and session expiry.
- [ ] B08-07 Verify redirects, sitemap, robots, analytics, and social previews.
- [ ] B08-08 Monitor errors, memory, database connections, and latency closely for 24 hours.
- [ ] B08-09 Record the release version and operational notes.
- [ ] B08-10 Schedule monthly dependency updates and quarterly restore tests.

Acceptance gate:

- Business-critical flows pass on production.
- No critical security or availability alerts occur during observation.
- Operations, backups, and incident ownership are documented.

## 13. Optional Batch 09 - Monorepo consolidation

Do this only after the deployed system is stable. It is not required for launch.

- [ ] B09-01 Decide whether preserving all three Git histories is required.
- [ ] B09-02 Move applications under `apps/website`, `apps/admin`, and `apps/api`.
- [ ] B09-03 Add npm workspaces and one root lockfile.
- [ ] B09-04 Add shared validation/types packages only where they reduce duplication.
- [ ] B09-05 Configure one Vercel project per frontend root directory.
- [ ] B09-06 Update CI change detection and deployment paths.
- [ ] B09-07 Archive the old repositories after verification.

## 14. Global definition of done

A batch is complete only when:

- [ ] Its implementation tasks are complete.
- [ ] Automated checks pass from a clean clone.
- [ ] No new critical or high-severity security issue was introduced.
- [ ] Environment variables and operational changes are documented.
- [ ] The Vercel feature preview was reviewed.
- [ ] The persistent staging environment passed its acceptance test.
- [ ] A rollback method exists for database or deployment changes.
- [ ] The pull request is approved and merged into `staging`.

## 15. Immediate next work

Start with Batch 00 and Batch 01. Do not publish the existing admin or API to a new public hostname until Batch 02 and Batch 03 acceptance gates pass.

The first implementation pull request should contain repository hygiene and safe configuration changes only. Authentication behavior and database migrations should be reviewed in separate pull requests so they can be tested and rolled back independently.
