# AeroBay CMS scope

The admin panel manages four content areas:

1. **Enquiries** — contact/CTA submissions include audience (`school`, `parent`, `student`) and source (`cta`, `contact_page`).
2. **Testimonials & podcasts** — student, parent, educator, and podcast records can be created, ordered, hidden, edited, and removed. Active records render at the end of the home page.
3. **Visionaries** — founders and team members support name, designation, department, portrait, LinkedIn URL, ordering, visibility, and removal.
4. **Clients** — client name, location, logo, website, home-page featured flag, ordering, visibility, and removal.

Images are uploaded through the authenticated admin API. Production must set `UPLOAD_DIR=/srv/aerobay/shared/uploads` and include that directory in backups. S3 is the recommended later replacement if the API runs on more than one server.

The existing static visionary and client data remains as a public fallback until the corresponding database table contains active CMS records. Populate and verify the CMS records before removing the fallback data.

Job creation/update/deletion API routes are disabled and the admin job screens are removed. `/careers` and the legacy `/jobs` URL send applicants to Zoho Recruit.

Run migrations only after a verified database backup:

```text
npm run db:migrate
```

The CMS migration adds enquiry classification, testimonial presentation fields, and the `Visionaries` and `Clients` tables. It deliberately leaves the old job tables in place for rollback safety.
