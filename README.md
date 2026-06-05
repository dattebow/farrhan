# farrhan.com

Personal portfolio site. Built from scratch - no frameworks, no site builders, just HTML and CSS.

Hosted on GitHub Pages under a custom domain because having a permanent address on the internet
is useful and I wanted one. Also because pointing clients to a proper domain is a lot cleaner
than sending them a Google Drive folder.

## What's on it

- About me
- Links to where I exist online
- Works & Services - rates for video editing and graphic design, plus project write-ups
- Equipment - a list of gear I actually use

## What it's actually for

Two things. One, a place to send clients. I do freelance video editing and graphic design, and
having a dedicated page with rates, terms, and past work is a better pitch than explaining
everything from scratch over DM every single time.

Two, a hub for everything else. My YouTube channel, socials, projects - it all lives here.
It also doubles as a landing page for my self-hosted services, which live under the same domain.

## Stack

Plain HTML + CSS. That's it. No build step, no dependencies, no `node_modules` folder taking
up 400MB.

One shared `style.css` handles the whole site. The layout is built around a card system with a
split-layout for pages that need two columns. Most of the motion is CSS - staggered fade-ins on
the homepage via `animation-delay`, nothing that requires JavaScript to pull off. The only JS
on the site is for displaying a live date in the header and triggering the reveal animations.

## Why hand-built

Using a site builder felt like cheating. If something breaks, I want to know exactly why and
where. Building it by hand means I know what every line does - and it loads fast, which is a
nice side effect of not shipping a React app to display five nav links and a photo.

## Live site

[farrhan.com](https://farrhan.com)
