# Westchester Youth Waterway Initiative — Website

This is the website for the Westchester Youth Waterway Initiative, a student-led
cleanup and education project on the Bronx River Pathway near White Plains, NY.
It's a Roots & Shoots (Jane Goodall Institute) sponsored project.

This guide is written for whoever's maintaining the site next — probably another
student, not a professional developer. There's no build step, no framework, and
nothing to install. Every page is a plain HTML file you can open and edit directly.

## How the site is built

- Plain HTML, CSS, and a little JavaScript. No React, no build tools, nothing to
  `npm install`.
- One shared stylesheet: `css/styles.css`. All the colors, fonts, and spacing for
  every page come from there.
- One shared script: `js/main.js`. It only does two things — the mobile menu button
  and the click-to-enlarge gallery on the Impact page.
- All artwork is original SVG illustration (`images/*.svg`), not photography. See
  **"Swapping in real photos"** below for how to replace it once you have your own.

## Previewing the site locally

You don't need to install anything special. From this folder, run:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. (Opening the HTML files directly by
double-clicking works for most things, but the mobile menu and gallery need a real
server to behave correctly — the command above is quick and free.)

## Updating content

### The stats numbers (Home and Impact pages)

Open `index.html` and `impact.html` and search for `<!-- UPDATE: STATS -->`. Each
number lives inside a `.stat-figure` div, like this:

```html
<div class="stat-figure">65</div>
<div class="stat-label">Volunteers to date</div>
```

Just change the number. **Update both pages** — the Home page has a shorter teaser
version of the same four numbers, and they should always match `impact.html`. There's
also a line near the stats on `impact.html` marked `<!-- UPDATE: AS-OF DATE -->` —
update that text so people know how current the numbers are.

### Upcoming cleanup events (Get Involved page)

Open `get-involved.html` and search for `<!-- UPDATE: EVENTS -->`. Each event is one
`.event-card` block:

```html
<div class="event-card">
  <div class="event-date"><span class="month">Aug</span><span class="day">16</span></div>
  <div class="event-meta">
    <strong>Saturday Morning Cleanup — Gedney Way Section</strong><br>
    9:00 – 11:00 AM · Meet at the Gedney Way pathway entrance, White Plains<br>
    Bags, gloves, and grabbers provided.
  </div>
  <a class="btn btn-secondary" href="mailto:...">I'll be there</a>
</div>
```

To add a new event, copy a whole `.event-card` block and edit the date, description,
and the `mailto:` link's `subject=` text. To remove a past event, delete its block.
There's no limit on how many you can list.

### Testimonials (Impact page)

Open `impact.html` and search for `<!-- UPDATE: TESTIMONIALS -->`. Each quote is a
`.testimonial` block — copy one, replace the quote and the `<cite>` line, and it'll
show up in the grid automatically.

## Swapping in real photos

Every image on the site is an original illustration sized to fit a specific spot,
like a 4:3 card or a 16:9 hero. When you have real cleanup photos, you don't need to
touch any CSS or layout. Just replace the `src` on the `<img>` tag.

| Illustration file | Used on | Suggested real-photo filename | Suggested size |
|---|---|---|---|
| `images/hero-river.svg` | Home hero, Contact | `hero-bronx-river.jpg` | 1600×1200px |
| `images/wildlife-heron.svg` | Home | `wildlife-heron.jpg` | 800×600px |
| `images/wildlife-turtle.svg` | Education | `wildlife-turtle.jpg` | 800×600px |
| `images/wildlife-fish.svg` | Home, Education | `wildlife-fish.jpg` | 800×600px |
| `images/pollution-bottle.svg` | Home, Education | `pollution-closeup.jpg` | 800×600px |
| `images/cleanup-students.svg` | Home, About, Get Involved | `cleanup-in-action.jpg` | 800×600px |
| `images/cleanup-sorting.svg` | About, Support | `sorting-and-weighing.jpg` | 800×600px |
| `images/water-testing.svg` | Education | `water-testing.jpg` | 800×600px |
| `images/site-a-before.svg` | About | `site-a-before.jpg` | 800×600px |
| `images/logo-mark.svg` | Every page (nav, footer, favicon) | keep this one as a vector mark, it's the logo | — |

When you replace an image, update both the `src` **and** the `alt` text on that `<img>`
tag to describe the real photo.

There used to be a before/after photo gallery on the Impact page, but it's been taken
down for now. The click-to-enlarge lightbox code is still in `js/main.js` if you want
to bring a gallery back later. It works with any `<button data-lightbox-trigger>`
element that has `data-full`, `data-alt`, and `data-caption` attributes; see the git
history for `impact.html` for a working example to copy from.

## Placeholders you should replace

- **Instagram handle** — every page's footer, plus the Contact page, links to
  `https://instagram.com/yourhandle`. Once the real account exists, find-and-replace
  `yourhandle` across all files.
- **Contact email** — every `mailto:` link on the site currently points to
  `ethangkantor@gmail.com`. If the project ever moves to a dedicated project email,
  find-and-replace that address across all files.
- **Website URL** — the three printable guides in `resources/` mention
  `westchesteryouthwaterway.org (placeholder)` at the bottom. Update once the site has
  a real domain, or delete the line if it doesn't.

## Page structure

```
index.html              Home
about.html               About the Project
get-involved.html        Get Involved (volunteer sign-up, events, what a cleanup looks like)
impact.html               Our Impact (stats, before/after gallery, testimonials)
education.html            Education & Resources hub
support.html               Support Us (grant breakdown, sponsorship)
contact.html                Contact
resources/
  plastic-and-wildlife.html   Printable guide
  reduce-single-use.html       Printable guide
  water-testing-guide.html     Printable guide
css/styles.css             The one stylesheet used by every page
js/main.js                  Mobile menu + gallery lightbox
images/*.svg                 All site artwork
```

**Every page repeats the same navigation menu and footer.** There's no shared
template system, so if you change a nav link or the footer, you need to make that
same change in all ten HTML files (seven main pages + three resource pages). It's
tedious but it means nothing can break from a missing include file.

## Printable resource pages

The three guides in `resources/` have a "Print this page" button that hides the site
header and footer and prints just the content. That's handled by a print stylesheet
already in `css/styles.css` — you don't need to do anything extra when editing their
text, it'll still print cleanly.

## No forms — just email

By design, this site has no contact forms and no backend. Every "sign up" or
"contact us" button is a `mailto:` link that opens the visitor's email app with a
pre-filled subject line (and sometimes a body template) addressed to the project
email. That means volunteer sign-ups, RSVPs, and sponsorship interest all arrive as
individual emails — there's no spreadsheet or database. If that becomes hard to keep
up with, a lightweight form service (like Formspree) could be added later without
changing anything else about the site.

## Deploying

Pushing to the `claude/wywy-website-build-1pgc1u` branch automatically triggers
`.github/workflows/deploy.yml`, which publishes the site to GitHub Pages. The one
manual step: in the GitHub repo, go to **Settings → Pages** and set **Source** to
**GitHub Actions** (only needs to be done once).
