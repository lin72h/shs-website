# Installing and Configuring Next.js Boilerplate Templates

Installing boilerplate templates are different than ordinary templates, you have to follow the steps strictly without skipping any of them.


1. [Installation](https://nextjstemplates.com/docs/boilerplate#installation)
2. [Databases Setup](https://nextjstemplates.com/docs/database)
3. [Authentication](https://nextjstemplates.com/docs/authentication)
4. [Sanity Integration](https://nextjstemplates.com/docs/sanity)
5. [Markdown Integration](https://nextjstemplates.com/docs/markdown)
6. [Stripe Integration](https://nextjstemplates.com/docs/stripe)
7. [Algolia Integration](https://nextjstemplates.com/docs/algolia)
8. [MailChimp Integration](https://nextjstemplates.com/docs/mailchimp)
9. [SMTP Configuration](https://nextjstemplates.com/docs/resend)

---

### Useful Links
- [Discord Community](https://pimjo.com/community)
- [Support](https://nextjstemplates.com/support)
- [Twitter](https://x.com/nextjstemplate)


### Installation

Before moving to all the other integrations, make sure to install the dependencies.

```bash copy
npm install

```

### Start the Developent Server

When all integrations are done, then you can start the project on the developement server

```bash copy
npm run dev
```

It'll start the template on http://localhost:3000

### Deploying on PaaS

If you are using a GitHub repo then you can go with free-of-cost and easy-to-use options like [Vercel](https://vercel.com/), or [Netlify](https://netlify.com/) they offer decent-free tiers for Next.js hosting.

Make sure to edit build command like this when deploying to Vercel.

![prisma-vercel](https://nextjstemplates.com/docs/prisma-vercel.png)

Follow the steps below to complete the installation, if you get stuck feel free to open a [support ticket](/support), we will get back to you ASAP.

### Update Log

November 26 2024
- Upgraded to Next.js v15

November 13 2024
- Updated Sanity Integrations
- Integrated Zod for Form validation
- Added Stripe webhook
- Added integrations enable disable features

## Email Configuration for Contact Form

To enable email functionality for the contact form:

1. Create a `.env.local` file in the root directory (if it doesn't exist already)
2. Add the following environment variables to the file:

```
EMAIL_SERVER_HOST="smtp.your-email-provider.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email-username"
EMAIL_SERVER_PASSWORD="your-email-password"
EMAIL_FROM="info@shsengineering.co.nz"
EMAIL_TO="recipient-email@example.com"
```

3. Replace the values with your SMTP email service provider details

For Gmail, you could use:
- EMAIL_SERVER_HOST="smtp.gmail.com"
- EMAIL_SERVER_PORT=587
- EMAIL_SERVER_USER="your-gmail-address@gmail.com"
- EMAIL_SERVER_PASSWORD="your-app-password" (requires app password, not your regular Google password)

For a service like [Resend.com](https://resend.com/) (recommended):
- EMAIL_SERVER_HOST="smtp.resend.com"
- EMAIL_SERVER_PORT=465
- EMAIL_SERVER_USER="resend"
- EMAIL_SERVER_PASSWORD="your-api-key"
- EMAIL_FROM="info@shsengineering.co.nz"

After setting these up, restart your development server for the changes to take effect.

Contact form submissions will be sent to info@shsengineering.co.nz.
