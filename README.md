# ATLY Winterwear Website

Production-ready Next.js 15 website for ATLY, a Seoul-led winterwear production and digital manufacturing platform.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui-style component primitives
- Vercel-ready routing and SEO

## Local Development

```bash
pnpm install
pnpm dev
```

Default local URL:

```text
http://127.0.0.1:3000/ko
```

## Production Build

```bash
pnpm build
pnpm start
```

## Deployment

Recommended hosting: Vercel.

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Use the default Next.js build settings:
   - Install command: `pnpm install`
   - Build command: `pnpm build`
   - Output: Next.js default
4. Add the custom domain:
   - Primary domain: `atly.co.kr`
   - Optional redirect: `www.atly.co.kr` to `atly.co.kr`

## DNS Notes

After the domain is added in Vercel, set DNS at the Korean domain provider according to the records shown by Vercel. Typically:

- Apex domain `atly.co.kr`: Vercel A record
- `www.atly.co.kr`: Vercel CNAME record

Use the exact values Vercel displays for this project.

## Locale Routes

- Korean: `/ko`
- English: `/en`
- Chinese: `/zh`
- Japanese: `/ja`

The root route redirects to `/ko`.
