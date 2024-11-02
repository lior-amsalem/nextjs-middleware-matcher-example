In here we'll take a look how to create a basic [nextjs middleware matcher](https://lior.live/software-engineering/how-to-use-matcher-in-next-js-middleware/). 

This is example of how we use a nextjs middleware matcher to redirect a "admin" url path to "login" url page (for whatever reason) ther are more examples, and you can read about what nextjs middleware matcher is and also what other ideas and examples you can come up with for nextjs middleware matcher below.

## Whats Nextjs Middleware matcher
The matcher in Next.js middleware is a way to control when and where your middleware runs. Middleware is like a checkpoint that Next.js hits before showing a page, where you can add custom logic like checking if a user is logged in, redirecting them to another page, or modifying their request.

With matcher, you define specific routes (URLs or URL patterns) that the middleware should apply to. This way, instead of running middleware on every single page of your app, it only runs on the paths you specify.

For example, you could set the matcher to run the middleware only on URLs like /admin or any route under /dashboard (such as /dashboard/settings). This selective approach keeps the app efficient and ensures that middleware only impacts the routes you need it to.


## Nextjs Middleware matcher Examples/Ideas
Here are five ideas for using the Next.js middleware matcher to enhance your app's functionality:

Restrict Access to Admin Pages
Use the matcher to apply middleware only to routes like /admin or /admin/*. This can check if a user has admin privileges and redirect unauthorized users to a "Not Authorized" page or back to the home page.

Language Redirect Based on Locale
With the matcher, you could run middleware on routes like /fr/* or /es/*, checking if the user's preferred language matches the route. If not, the middleware could redirect them to a version of the site in their language, improving localization.

Age Gate for Restricted Content
Use middleware with a matcher for paths such as /restricted or /mature-content/*. This could check if the user has verified their age and, if not, redirect them to an age verification page before allowing access.

Theme-Specific Pages Based on URL Parameters
Suppose you want users coming from different campaigns or sources to see customized pages. The matcher can be applied to paths like /promo/*, allowing middleware to identify users from specific sources and show a customized theme or layout.

Tracking and Logging User Activity on Sensitive Pages
For pages that handle sensitive data, like /account/settings or /billing/*, use the matcher to trigger middleware that logs user actions. This can help track important user activities (e.g., profile changes) for security auditing without impacting the rest of the site.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
