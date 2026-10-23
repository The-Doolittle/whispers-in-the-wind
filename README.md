# whispers-in-the-wind

Whispers in the Wind is an organization that provides training and consulting resources for church leaders and offers Spiritual Direction / Spiritual Care to church staff and the LGBT community.

Live at <https://whispersinthewind.org>, hosted on GitHub Pages.

## How the site is built

GitHub Pages builds the site with Jekyll on every push to `main`. There is no build step to run yourself.

```
_config.yml              Site title, description, URL, header nav links, plugins
_layouts/default.html    The shared <head>, header, and footer for every page
index.html … donate.html Page content only, with a small front-matter block on top
404.html                 "Page not found" page
css/style.css            All styling (colors/fonts as CSS variables at the top)
js/script.js             Mobile menu toggle, footer year
images/                  Photos (WebP), logo, favicons
robots.txt               Points search engines at the sitemap
```

Each page starts with front matter like:

```yaml
---
title: Book a Spiritual Direction Session     # browser tab + Google result title
description: Schedule a remote session…        # Google result snippet (~155 chars)
body_class: story-page                         # optional, used by My Story's dark theme
image: /images/lesli-story-bkg.jpg             # optional social-share preview image
---
```

The `jekyll-seo-tag` plugin turns that into the `<title>`, meta description, canonical URL, and Open Graph/Twitter tags. `jekyll-sitemap` generates `/sitemap.xml`.

To **add a nav link**, add it to `nav:` in `_config.yml`. To **change the header or footer**, edit `_layouts/default.html`.

## Previewing locally

Because pages use the shared layout, opening the `.html` files directly in a browser won't show the header and footer. Build and serve it with the same Jekyll version GitHub Pages uses:

```sh
docker run --rm -it -p 4000:4000 -v "$PWD":/srv/jekyll -w /srv/jekyll ruby:3.3 \
  sh -c "gem install github-pages webrick && jekyll serve --host 0.0.0.0"
```

Then open <http://localhost:4000>.

## Still to do

- **Stripe live mode:** `donate.html` uses `pk_test_` keys, so donations don't go through. Swap in the live buy-button IDs and publishable key from the client's Stripe dashboard.
- **Contact form:** `contact.html` currently uses a mailto button. When a form backend is ready, add the form back. The `.contact-wrap` / `.contact-form` styles are still in `style.css`.

## Domain / DNS

`CNAME` holds `whispersinthewind.org`. The apex domain's `A` records point at GitHub Pages (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`). "Enforce HTTPS" should be on under **Settings → Pages**.
