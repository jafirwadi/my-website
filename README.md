# Tanzim — Portfolio Site

One-page React site on a design system meant to grow into a multi-page
site later. Dark forest-green canvas, cream type, gold accent,
Playfair Display + DM Sans, a Dancing Script signature mark — built
with React, Vite, Tailwind and Framer Motion.

## Run it locally

You already have Node and Git installed, so from this folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). If you're
updating from an earlier copy of this project, run `npm install`
again even if you've run it before — this round added three new
packages (`react-icons`, `react-simple-maps`, `d3-geo`).

## Section order

Navbar (animated signature) → Hero → Client strip → The thinking
behind the build → Skills orbit → Services → Work (stacking scroll
cards) → Experience → How I work → Testimonials → First Brick →
CTA → Contact form → FAQ → Footer, plus a floating back-to-top button.

## Where things live

```
src/
  data/content.js      ← ALL the copy: hero text, services, projects,
                          experience, testimonials, FAQs, nav/social
                          links. Edit this file for text changes —
                          you shouldn't need to touch component code.
  data/world-110m.json  Map data for the testimonials world map —
                          you won't need to touch this.
  components/           One file per section. Icons.jsx holds every
                          icon used across the site (real brand marks
                          via react-icons, plus small custom line
                          icons). Signature.jsx is the animated
                          cursive mark, shared by the nav and footer.
                          WorldMap.jsx is the testimonials map.
  assets/                First Brick logo + your resume. Drop other
                          real images (portrait, project shots) here
                          too, then swap the matching <Placeholder />
                          for a real <img> (pattern below).
  index.css              Fonts, the marquee ticker, the skills-orbit
                          spin, and focus states. Design tokens
                          (colors.forest / cream / gold) live in
                          tailwind.config.js.
public/
  resume.pdf              Your actual resume — the header's Resume
                          button downloads this file directly.
```

Swap a placeholder for a real image:

```jsx
import shot from '../assets/your-file.jpg'
...
<img src={shot} alt="..." className="aspect-[16/11] w-full object-cover" />
```

## Image sizes and formats, section by section

Everything below is a dashed `<Placeholder />` box you can swap
directly, except the three "generated mark" rows — those currently
render as text initials in code (no image slot exists yet), so
swapping them for real photos means replacing a `<span>` with an
`<img>` in that component, not just dropping in a file.

| Section | What it is | Recommended size | Aspect | Format | Notes |
|---|---|---|---|---|---|
| Hero | Your portrait | 1000 × 1250px | 4:5 | JPG/WebP, < 300KB | Sits directly on the dark green canvas — a plain or softly blurred background reads cleanest |
| Work | 5 project screenshots | 1600 × 1100px | 16:11 | JPG/WebP, < 400KB each | Full-page browser screenshots of each live site; keep framing (browser chrome or not) consistent across all five |
| The thinking behind the build | Supporting visual (desktop only) | 900 × 1200px | 3:4 | JPG/WebP, < 300KB | A candid work-in-progress or thinking shot works better here than a posed portrait |
| First Brick | Newsletter logo | *(already set)* | — | — | Using the file you provided — no action needed |
| Testimonials *(generated mark)* | Client avatars | 200 × 200px | 1:1 | JPG/PNG, < 100KB | Currently initials in a circle; needs a small `Testimonials.jsx` edit to swap in real photos |
| Experience *(generated mark)* | Company logos | 96 × 96px | 1:1 | PNG (transparent), < 50KB | Currently initials in a square; same swap pattern as above |
| Client strip *(generated mark)* | Client/project logos | 80 × 80px | 1:1 | PNG (transparent), < 50KB | Same — the ticker in `ClientStrip.jsx` |

General rule: export at 2x the display size for retina sharpness, then
compress (TinyPNG/Squoosh) before dropping the file in — that combo
keeps this site's fast PageSpeed score intact.

## The contact form

The form submits to Formspree and shows the on-page confirmation only after Formspree accepts the submission. Create a Formspree form, set its notification email to `tanzimjafirwadi@gmail.com`, and verify that address in your Formspree account.

To connect this site:

1. Copy `.env.example` to `.env`.
2. Replace `YOUR_FORM_ID` with the ID from your Formspree form endpoint.
3. Run `npm run dev` to check the form locally.
4. Deploy the updated site. For the existing `npm run deploy` workflow, build and deploy from the same environment that has `.env`.

Keep `.env` private; it is ignored by Git. The Formspree form ID is included in the public build, so it is not a secret. The form also supports Telegram notifications through Formspree's dashboard integrations.
## The testimonials world map — action needed

Each testimonial now highlights a country on a world map
(`WorldMap.jsx`). **The five countries currently set are placeholders**
— Sweden, United States, United Kingdom, Canada, Australia — spread
across the regions your brief named, not verified facts about those
specific reviewers (that data was never provided). Before this goes
live, open `src/data/content.js`, find the `testimonials` array, and
set the real `country` (display name) and `countryCode` (numeric
ISO 3166-1 code, e.g. `"840"` for the US) for each person. A quick way
to find a code: search "[country name] ISO 3166-1 numeric code."

## Adding a page later

This is one page of anchor-linked sections on purpose, per your
brief. When you're ready for real pages:

1. `npm install react-router-dom`
2. Wrap `<App />` in a `<BrowserRouter>`, turn the current section
   components into route elements.
3. The design tokens, fonts and `data/content.js` don't change —
   only routing does.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push this project to it.
2. In the repo's **Settings → Pages**, set **Source** to
   **GitHub Actions**. The included workflow
   (`.github/workflows/deploy.yml`) builds and deploys automatically
   on every push to `main` — no extra config needed, since
   `vite.config.js` already uses a relative base path.
3. First deploy takes a couple of minutes; the URL appears in the
   **Actions** tab and in **Settings → Pages** once it's live.

If you'd rather deploy by hand instead of via Actions:

```bash
npm run build
npm run deploy   # requires: git remote set to your GitHub repo
```

## A few decisions worth knowing about

- **Buraq Lab is framed as past experience, not your current brand.**
  Per your note, the site no longer badges anything "Buraq Lab" —
  the hero's availability badge is brand-neutral, and Buraq Lab only
  appears in the Experience section with an end date (Jun 2026) and
  in the client-work ticker, both accurate history rather than a
  current affiliation claim.
- **The Work section stacks on scroll using pure CSS `sticky`
  positioning** (no scroll-linked JavaScript) — each card pins,
  then the next one slides up and covers it. Because it's native
  sticky behavior, reverse-scrolling un-stacks the cards exactly as
  expected, automatically.
- **The skills orbit spins two layers in opposite directions** — the
  ring rotates one way, each tag counter-rotates the other way at
  the same speed, so the tags travel in a circle while staying
  upright and readable. Collapses to a simple wrapped, staggered
  list on mobile, where a rotating ring would just be hard to read.
- **Design direction still follows your brief's own spec** (forest
  green, Playfair Display, the Green Pants Studio reference) rather
  than `/creative-design`'s default — see the note from the first
  build. This round adds a lot more motion and interactivity
  throughout, per your latest notes — the signature draw-on, the
  orbit, the tabbed services panel, the testimonial carousel, and
  the FAQ accordion are all deliberately animated now.
- **Client marquee, testimonial and experience "logos"** are
  generated initials, not real files — see the image table above for
  what to prepare and where each one swaps in.
- **Social icons use `react-icons`, not hand-drawn SVGs.** The first
  pass hand-coded LinkedIn/Dribbble/GitHub/Upwork/WhatsApp as raw SVG
  paths, and several rendered malformed. They're now real, tested
  icons (Font Awesome + Simple Icons sets) — same for the tool logos
  in the skills orbit (actual WordPress/Webflow/Figma/React/etc. marks).
- **The skills orbit and Services detail panel are cream now**, not
  dark green, matching the "How I work" section's chapter-break
  treatment — per your note, so those two spots read as bright,
  soft pauses against the rest of the dark page.
- **Both signatures animate continuously**, not just once on load —
  they draw on, hold for a few seconds, then redraw, for as long as
  the page is open. `Signature.jsx` is the single shared component
  behind both.
