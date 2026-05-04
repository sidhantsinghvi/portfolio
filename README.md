# Sidhant Singhvi — Portfolio

Personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Running locally

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo.
3. Set **Root Directory** to `portfolio` (since the site lives in a subfolder).
4. Click Deploy. Done — auto-deploys on every push to main.

## Editing your content

All data (projects, experiences, skills, principles, AirCaps fit cards) lives in one file:

**`data/portfolio.ts`**

Update it and the entire site reflects the changes. No component edits needed for content changes.

## Adding your resume

Drop your resume PDF at `portfolio/public/resume.pdf`. The Resume button already links to `/resume.pdf`.

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Page composition
│   └── globals.css      # Design tokens + animations
├── components/
│   ├── Nav.tsx          # Sticky nav with scroll tracking
│   ├── Hero.tsx         # Animated pipeline + hero content
│   ├── Terminal.tsx     # Animated terminal sidebar
│   ├── AirCapsFit.tsx   # AR/real-time relevance cards
│   ├── Experience.tsx   # Expandable timeline
│   ├── Projects.tsx     # Filterable project cards
│   ├── Skills.tsx       # Skills by category
│   ├── HowIThink.tsx    # Engineering principles
│   └── Contact.tsx      # Contact links + footer
└── data/
    └── portfolio.ts     # All content — edit here
```
