# Whispers in the Wind — static site

A hand-built, responsive, multi-page replacement for the WordPress site,
ready for free GitHub Pages hosting.

## Pages

| File            | Was (WordPress)                    | Status |
|------------------|-------------------------------------|--------|
| `index.html`     | Home                                 | Content pulled from live site |
| `about.html`     | `?page_id=88`                        | Content pulled from live site |
| `donate.html`    | `?page_id=236` (Donations)           | Content pulled from live site |
| `my-story.html`  | `?page_id=110` (My Story)            | Copy in &mdash; needs `images/lesli-story-bkg.jpg` |
| `booking.html`   | `?page_id=159` (Booking)             | **Blocked by robots.txt — needs your copy + Cal.com embed** |
| `contact.html`   | `?page_id=106` (Contact)             | **Blocked by robots.txt — Home page's short blurb used as a stand-in** |

Three of the original WordPress pages disallow automated fetching in their
`robots.txt`, so their exact copy couldn't be pulled directly. Each of
those three files has an obvious `fill-in-notice` box marking what's
missing — open the page on whispersinthewind.org, copy the real text, and
paste it in.

## Before you publish — fill these in

1. **My Story hero photo** — save the source photo as
   `images/lesli-story-bkg.jpg` (see `images/README.txt` for the source
   URL). Lesli is centered in the photo, so the text card sits on the
   left with a gradient fading out before the center — if the card needs
   to move, adjust the gradient stops in `css/style.css` under
   `.story-hero`.
2. **Booking page intro + Cal.com embed** — `booking.html`. Get the real
   embed snippet from the client's Cal.com account (Event Type → Embed)
   and paste it in place of the `#cal-embed-placeholder` div.
3. **Contact page copy** — `contact.html`, confirm/replace the stand-in text.
4. **Contact form backend** — GitHub Pages can't run server code, so the
   form on `contact.html` won't send email on its own. Sign up for a free
   service like [Formspree](https://formspree.io) or [Basin](https://usebasin.com),
   set the form's `action` attribute to the endpoint they give you, and
   remove the placeholder `alert()` in `js/script.js`.
5. **Real contact email** — replace `hello@whispersinthewind.org`.
6. **Donate link** — replace the `href="#"` on `donate.html`'s "Donate
   Online" button with the real PayPal/Give/Stripe link.
7. **Header logo + "Living in a Gray World" art** — currently simple
   line-art placeholders. Drop real images into `images/` and swap the
   `<svg>` placeholders for `<img>` tags.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `whispers-in-the-wind`).
2. Push these files to the repo's `main` branch, keeping the folder
   structure (all `.html` files at the root, plus `css/`, `js/`).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a URL like `https://username.github.io/whispers-in-the-wind/`.
6. To use the real domain (`whispersinthewind.org`):
   - Add a file named `CNAME` at the repo root containing just:
     `whispersinthewind.org`
   - At your domain registrar/DNS provider, point the domain at GitHub Pages:
     add an `A` record for the apex domain to GitHub's IPs
     (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`), or a `CNAME`
     record for `www` → `username.github.io`.
   - Back in Settings → Pages, enter the custom domain and enable
     "Enforce HTTPS" once it's verified.
7. Once DNS is pointed at GitHub Pages, you can cancel the WordPress
   hosting plan.

## Structure

```
index.html      Home
about.html      About / Vision
my-story.html   My Story (needs copy)
booking.html    Booking + Cal.com embed slot (needs copy + embed)
contact.html    Contact form
donate.html     Donations
css/style.css   All styling (colors/fonts as CSS variables at the top)
js/script.js    Mobile menu, footer year, contact form handler
```

Responsive breakpoints are mobile-first via CSS media queries (`720px` and
`900px`), so it adapts by screen width automatically — no separate mobile
site needed.
