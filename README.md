## Birthday Freebies

Web app for birthday freebies and discounts, sourced from a Sanity headless CMS instance.

## Running Application Locally

`npm i` to install dependencies

`npm run dev` to start the application locally

The Sanity admin studio is hosted on `/studio` - after authentication to update deals/freebies and view suggested submitted.

## Cronjob

The `/api/cron` route is setup in Vercel to run monthly (as per `vercel.json`), which sources new freebies and deals using Axios + Cheerio to parse.
