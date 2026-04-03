# Code Rules

These rules are non-negotiable. Read and obey on every session.

## Comments

- No tutorial comments. No "This function does X by Y". No docstring novels.
- Comments sound like a tired dev muttering to himself at 2am. Short, blunt, real.
- Examples of good comments: `// why does this even work`, `// don't touch this`, `// safari being safari again`, `// the api returns garbage here so we clean it up`
- If the code is obvious, no comment at all. Silence is fine.

## Code Style

- Write only what is needed. No padding, no fluff, no "just in case" abstractions.
- Code must look like a human wrote it — not an AI. No over-structured, overly-commented, perfectly-formatted walls of boilerplate.
- Keep it tight. Three similar lines beat a premature abstraction every time.
- No big bulky code for the sake of looking thorough. If 4 lines do the job, don't write 40.
- Variable names: natural, short where context is clear, descriptive where it matters.

## UI / Design Language

- Premium feel. Everything must look and feel like a polished iOS app.
- Glass morphism: frosted glass backgrounds, subtle transparency, backdrop blur.
- Pills and rounded buttons everywhere. No sharp corners unless intentional.
- Soft glows, light bleeds, subtle shadows with color tinting.
- Beautiful motion: spring animations, smooth transitions, meaningful micro-interactions.
- Typography matters: clean hierarchy, proper spacing, system-font-stack or premium typefaces.
- Dark mode first, light mode second. Both must look premium.
- Spacing and padding should breathe. Don't cram elements together.

## Performance

- Lazy load everything that isn't above the fold.
- Images: use next-gen formats (webp/avif), responsive srcsets, blur-up placeholders.
- Code split aggressively. No massive initial bundles.
- Assume the user is on a slow 3G connection. The site must still feel usable.
- Skeleton screens over spinners. Progressive loading over blocking loads.
- Debounce and throttle where appropriate. Don't hammer the main thread.

## SEO

- Semantic HTML. Proper heading hierarchy. Landmarks and aria where needed.
- Meta tags, Open Graph, structured data — all present and correct.
- Server-side rendering or static generation for content pages.
- Proper canonical URLs, sitemaps, robots.txt.
- Core Web Vitals must pass. LCP, FID, CLS — all green.

## Security (Production-Grade)

- Grade A or nothing ships.
- Sanitize all user input. No raw innerHTML. No eval. No dangerouslySetInnerHTML without sanitization.
- CSP headers, HSTS, X-Frame-Options, X-Content-Type-Options — all set.
- Auth tokens in httpOnly cookies, never localStorage.
- Rate limiting on all endpoints. CSRF protection on mutations.
- Dependencies audited. No known vulnerabilities in production deps.
- Environment variables for secrets. Nothing hardcoded. Ever.
- Validate on the server. Client validation is UX, not security.

## General

- Don't over-engineer. Build what's asked, not what might be needed someday.
- If something is removed, delete it completely. No commented-out graveyards.
- Test the critical paths. Don't test the obvious.
