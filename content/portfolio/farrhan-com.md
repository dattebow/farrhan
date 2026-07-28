---
title: "farrhan.com"
date: 2026-07-20
aliases:
  - "/portfolio/farrhan-com.html"
date_display: "Since 2026"
category: "Personal"
bodyClass: "page-project"
description: "Personal portfolio site, built from scratch. No frameworks, no templates."
link_label: "farrhan.com"
link_url: "https://farrhan.com"
image: "/assets/portfolio/farrhan-screenshot.png"
image_alt: "farrhan.com screenshot"
faq:
  - q: "Why did you build this yourself?"
    a: "Using a site builder felt like cheating. Building it by hand means I know exactly what's in it and why."
  - q: "What's it built with?"
    a: "Hugo. Hosted on GitHub Pages. Nothing fancy."
  - q: "Why bother having a personal domain?"
    a: "A domain name is useful. It's a permanent address you actually own- one place to send clients, link projects, and tie everything together."
---

You're on it right now!

Built by hand, twice now. The first version was hand-written HTML, one page at a time, no templating, no shortcuts. It worked, but changing anything meant editing raw markup every time, even for something as small as adding a new portfolio entry.

Moved onto Hugo in July 2026. Content lives in `content/` as plain markdown, templates live in `layouts/` as HTML, and Hugo combines the two into the actual site. Splitting it that way means adding a new project is just a new markdown file and a screenshot dropped into the right folder, no HTML involved. The old version couldn't do that.

The whole thing runs on two colours only, a dark blue and a milky white, with Spectral for headings and Satoshi for everything else. No accent colours, no exceptions- that constraint was deliberate from the start, and it means every visual decision has to come from type and spacing instead of reaching for a new colour when something needs to stand out.

Hosted on GitHub Pages, deployed through GitHub Actions on every push to main. `public/` is gitignored and rebuilt from scratch each time, so there's nothing to hand-edit there even if I wanted to. It also doubles as a hub for my self-hosted services.
