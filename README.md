# farrhan.com

Personal portfolio site. Built with [Hugo](https://gohugo.io) — no theme, custom templates
written from scratch to match the brand (Dark Blue `#212842` / Milky White `#F3F3F3`, Spectral +
Satoshi). What ships to the browser is plain HTML and CSS; Hugo is just the build step that
generates it from the files below.

Hosted on GitHub Pages under a custom domain.

## Folder structure

```
content/            → the actual text/data for every page (markdown + front matter)
  _index.md            the homepage
  pages/                every non-portfolio page (about, links, services, equipment, etc.)
  portfolio/            one file per portfolio project — this is the part you'll touch most

layouts/            → the HTML templates that turn content into pages (Go templates)
  baseof.html           the shared shell: sidebar nav + content column
  _partials/            reusable snippets (site-nav, head/meta tags)
  pages/                one template per page "type" (nav-list, nav-groups, about, equipment,
                         service-detail, qr) — selected via each page's `layout:` front matter
  portfolio/single.html the template every file in content/portfolio/ renders through

static/             → files copied as-is, unprocessed
  assets/               style.css, images, the background video, favicon
  client-work/          Blank Note Coffee and Hello John — off-limits client deliverables,
                         never touch these, they're not part of the farrhan.com design

hugo.yaml           → site config (title, base URL, global params)
```

## Adding a new portfolio project

Add a file to `content/portfolio/`, e.g. `content/portfolio/my-new-project.md`:

```yaml
---
title: "Project Name"
description: "One-line description for the homepage list and link previews."
link_label: "External link text"
link_url: "https://example.com"
image: "/assets/portfolio/my-screenshot.png"
faq:
  - q: "A question"
    a: "The answer."
---

The write-up paragraph(s) go here, as regular markdown.
```

Drop the screenshot into `static/assets/portfolio/`, save, and it shows up on the homepage list
and gets its own page at `/portfolio/my-new-project.html` — no HTML or CSS to touch.

## Previewing locally

```
hugo server
```

then open `http://localhost:1313`. Rebuilds automatically on save.

## Deploying

Push to `main`. GitHub Actions runs `hugo build` and publishes the result to GitHub Pages.

## Live site

[farrhan.com](https://farrhan.com)
