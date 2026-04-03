# 2U2.ai Rebuild - Progress & Context

## Goal
Rebuild 2u2.ai as a premium, iOS-style landing page with glassmorphism design.
Single-page static site: HTML + CSS + JS. No framework. Production-ready.
Must match the live site content while upgrading the design language.

## What It Is
AI-powered meme creation platform for Web3. Features token ($2U2), NFT minting,
AI meme generation, remix network, and MaaS (Meme as a Service) enterprise offering.

## Current Status: COMPLETE

### Sections Built (all done, content matches live site)
- [x] Navigation (glass pill nav, mobile hamburger, Launch App -> /app)
- [x] Hero ("Text-to-Viral in Seconds", matching live site copy)
- [x] Scrolling pills marquee ("100% COMMUNITY DRIVEN", "POWERING THE NEXT META", "FORGED FROM SACRIFICED AI SOULS")
- [x] Mission statement ("In crypto, attention is the only asset...")
- [x] Features with live-site copy:
  - 01: The AI Engine - "Zero Skills. Maximum Chaos."
  - 02: The Remix Network - "Don't Just Like. Remix."
  - 03: The Asset Library - "Your IP, Weaponized."
- [x] MaaS - "Empower Your Community to Shill For You" + Apply for Partnership CTA
- [x] Economy - "The Viral Economy" / "Meme is the Language. 2U2.ai is the Dictionary."
  - Create-to-Earn (Reputation), Share-to-Earn (Visibility), Burn-to-Access (Deflation)
- [x] Token info ($2U2, coming soon, 20% discount, 100% burned, staking, governance)
- [x] Pricing - "Select Your Loadout" with detailed perks:
  - Pepe's Pocket $5 (casual reposter)
  - Degen's Stash $20 (relentless shiller, 3x priority, 20% cheaper)
  - Wojak's Armory $100 (project leads, API, 30-day pro pass)
- [x] Payment section (USDT/Card + $2U2 recommended with 20% off, 100% burned)
- [x] Roadmap:
  - Phase 1: Ignition (Current) - MVP, AI Engine, Genesis Onboarding, OG Badges
  - Phase 2: Expansion (Flywheel) - MaaS, Video, Mobile, Referral V2
  - Phase 3: Meme Layer (TGE & Beyond) - Token, Staking, Asset Store, Cross-Chain
- [x] FAQ (3 items matching live site)
- [x] Footer (Ecosystem/Support/Socials with real links)

### Visual Effects (all done)
- [x] Cursor-following glow effect
- [x] Infinite scrolling pills marquee (CSS animation)
- [x] Animated background orbs with mouse parallax
- [x] Scroll reveal animations (IntersectionObserver)
- [x] Button ripple effects
- [x] 3D tilt on pricing cards
- [x] Cursor glow on glass cards
- [x] FAQ accordion
- [x] Page loader with branded animation

### Production Readiness (all done)
- [x] SEO: meta description, OG tags, Twitter cards, structured data, canonical, robots
- [x] Security: CSP, X-Frame-Options, X-Content-Type-Options, referrer-policy
- [x] Performance: deferred script, font preloading, page loader, scroll-throttled nav
- [x] Favicon (inline SVG)
- [x] Real social links: X (@2u2ai), Telegram, Medium, Docs (Google Drive)
- [x] External links use target="_blank" rel="noopener noreferrer"

## Real Links
- App: /app
- Partner: https://t.me/ai2u2meme/11641
- X: https://x.com/2u2ai
- Telegram: https://t.me/ai2u2meme
- Medium: https://medium.com/@2u2ai
- Docs: https://drive.google.com/file/d/1Lc3rufeDb63bTlB3eZGH83UoxPEt-Fzm/view

## What Could Be Added Later
- [ ] OG image (og-image.png needs to be designed)
- [ ] Analytics (Plausible or similar)
- [ ] PWA manifest + service worker
- [ ] Lighthouse audit
- [ ] Server-side headers (HSTS etc) when deployed

## File Structure
```
2u2-ios/
  index.html    - single page, all sections
  styles.css    - all styles, glass system, responsive
  script.js     - interactions, animations, loader
  AGENTS.md     - code rules (auto-read by qoder)
  PROGRESS.md   - this file
```
