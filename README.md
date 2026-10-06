# Portfolio — Marco 

Single-page bilingual (EN/FR) cybersecurity portfolio. Plain HTML, CSS and vanilla
JavaScript — no framework, no build step, no backend. Drop it on GitHub Pages and it works.

```
index.html          the page shell (you rarely touch this)
data.js             ← ALL your content lives here. This is the file you edit.
app.js              renders the page from data.js, handles the EN/FR toggle
styles.css          theme + layout (accent colour is one variable at the top)
assets/
  favicon.svg       browser tab icon
  reports/          ← put your PDFs here
```

---

## 1. Adding a project

Two steps. Nothing else.

**Step 1 — drop the PDF in `assets/reports/`**

```
assets/reports/my-splunk-report.pdf
```

**Step 2 — open `data.js`, find the `projects:` list, and copy one block**

```js
{
  title:   { en: "Splunk Detection Lab",   fr: "Laboratoire de détection Splunk" },
  context: { en: "Hands-on lab",           fr: "Laboratoire pratique" },
  summary: { en: "One short line.",        fr: "Une courte ligne." },
  tags:    ["Splunk", "SPL", "Detection"],
  files: [
    { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/my-splunk-report.pdf" }
  ],
},
```

Save, refresh the page. The card appears, numbered automatically.

- **Remove a project** → delete its whole `{ ... },` block.
- **Reorder projects** → move blocks up or down. The `01 / 02 / 03` counters renumber themselves.
- **Every text field** is `{ en: "...", fr: "..." }`. `tags` are not translated on purpose (tool names are the same in both languages).

Don't forget the trailing comma after the closing `}` of each block.

---

## 2. How the file links work

`files` is an **array**, so one project can carry several documents:

```js
files: [
  { label: { en: "Report",  fr: "Rapport" },      path: "assets/reports/01-report.pdf" },
  { label: { en: "Diagram", fr: "Schéma" },       path: "assets/reports/01-diagram.pdf" },
  { label: { en: "Slides",  fr: "Présentation" }, path: "assets/reports/01-slides.pdf" }
],
```

What that produces:

| Behaviour | Result |
|---|---|
| Clicking anywhere on the card | opens the **first** file in the array |
| Clicking a labeled link ("Diagram") | opens **that** file |
| Every open | new browser tab, viewed inline — **not** downloaded |
| Clicking the card title | same as clicking the card (it's a real link, so it works with keyboard and middle-click) |

### No PDF yet?

Use an empty array:

```js
files: [],
```

The card still renders, without file links, and is not clickable. Nothing breaks.
The same happens if a `path` is left empty, so a half-filled entry never produces a dead link.

### Path rules

```js
path: "assets/reports/report.pdf"    // ✅ relative — works everywhere
path: "/assets/reports/report.pdf"   // ❌ leading slash breaks on GitHub Pages project sites
```

Use forward slashes, and avoid spaces and accents in **file names** (accents in the visible
labels are fine). `mon-rapport-final.pdf` — good. `Mon Rapport Final.pdf` — avoid.

---

## 3. Standalone documents

`data.js` also has a `documents:` list, rendered under **Reports / Documents**. Same shape as
a project but lighter (no context line, no tags) — use it for write-ups, notes, cheat sheets
or your résumé.

---

## 4. Other things you can edit in `data.js`

| What | Where |
|---|---|
| Name, tagline, contact links | `profile` |
| About paragraphs and the highlights box | `about` |
| Skills grid | `skills` |
| Section titles, buttons, small labels | `ui` |
| Starting language | `config.defaultLang` (`"en"` or `"fr"`) |
| Auto-switch to French for French browsers | `config.autoDetectBrowserLanguage` (`true` / `false`) |

Search `data.js` for **`TODO`** — every spot that still needs your real content is marked.
Everything else is real content.

**Accent colour** lives near the top of `styles.css`:

```css
--accent: #22e5c1;   /* teal — try #35e07a (matrix green) or #2bd6ff (electric cyan) */
```

Change that one value and the whole page follows. Also update the two colours in
`assets/favicon.svg` if you want the icon to match.

---

## 5. Preview locally

Opening `index.html` by double-clicking works, but a tiny local server is closer to the real
thing:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 6. Deploy to GitHub Pages

### If the repo does not exist yet

1. Go to <https://github.com/new>.
2. **Repository name:** `portfolio` · **Visibility:** Public · do **not** add a README or .gitignore.
3. Click **Create repository**.
4. In the project folder:

```bash
git init
git add .
git commit -m "Add bilingual cybersecurity portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Enable Pages

5. In the repo: **Settings** → **Pages** (left sidebar).
6. Under **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` · **Folder:** `/ (root)`
7. Click **Save**. Wait ~1 minute, reload the Settings → Pages page, and the live URL appears at the top:

```
https://YOUR-USERNAME.github.io/portfolio/
```

> Want the shorter URL `https://YOUR-USERNAME.github.io/` with no `/portfolio` suffix?
> Name the repository exactly `YOUR-USERNAME.github.io` instead.

### Publishing updates later

```bash
git add .
git commit -m "Add Splunk report"
git push
```

Pages redeploys automatically in under a minute. Hard-refresh (`Ctrl/Cmd + Shift + R`) if you
still see the old version — the CDN caches briefly.

---

## 7. Search engines (keep the site unlisted)

The site is publicly reachable by URL but asks search engines not to list it.

**What does the work:** `<meta name="robots" content="noindex, nofollow">` in
`index.html`. That tag is the only thing here that Google actually obeys.

**What does not:** `robots.txt`. Crawlers read robots.txt only from the *domain
root* — `https://infamous404.github.io/robots.txt` — never from `/Portfolio/robots.txt`.
This is a GitHub Pages **project** site, so it cannot serve the domain root. The
`robots.txt` in this repo is kept for defence in depth and would take effect if the
site ever moves to its own domain.

> **Do not move those robots.txt rules to the domain root** (a repo named
> `infamous404.github.io`). Two things would break:
> 1. LinkedIn, Twitter and Facebook crawlers respect robots.txt — the share
>    preview card would stop rendering.
> 2. A blocked crawler can never *read* the noindex tag, so the page could still
>    surface in results as a bare URL. Blocking crawling and asking for noindex
>    work against each other.

**Social previews are unaffected.** `noindex` is a search-indexing directive;
LinkedIn/Twitter/Facebook crawlers ignore it and read the Open Graph tags normally.

**Still reachable by search despite the above:**

- The **GitHub repo itself** (`github.com/infamous404/Portfolio`) is public and indexed
  separately from Pages. Making it private would disable Pages on a free account.
- **PDFs** under `assets/reports/`. `noindex` is an HTML tag — it cannot apply to a
  PDF, and GitHub Pages cannot send an `X-Robots-Tag` header. Assume anything you
  put there is publicly indexable.
- **Git history** keeps every version of every file, including ones later edited out.

---

## Notes

- `.nojekyll` tells GitHub Pages to serve the files as-is, so nothing gets swallowed by Jekyll.
- No localStorage, no cookies, no analytics, no external requests. The language toggle is
  in-memory only, so nothing is stored on the visitor's machine and no request can fail.
- Fonts: the CSS asks for JetBrains Mono / Fira Code and falls back to the system monospace
  font, so the page loads instantly and works offline. `index.html` has a commented-out
  Google Fonts link if you ever want the real webfont.
- **Redact before committing.** PDFs pushed to a public repo are public and get indexed —
  strip client names, real IPs, hostnames, credentials and internal URLs first. Deleting a
  file later does not remove it from git history.
