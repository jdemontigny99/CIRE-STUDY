# CIRE Study

A simple, beautiful Progressive Web App for studying the **Canadian Investment Regulatory Exam (CIRE)** practice exam — 110 official questions with instant feedback, topic filters, wrong-answer review, bookmarks, and progress tracking.

Designed iPhone-first, but works great on iPad and desktop too. Once installed, it runs offline.

---

## ✨ Features

- **110 practice questions** organized across 9 syllabus elements
- **Custom session length** — pick anywhere from 1 to 110 questions
- **Topic filtering** — focus on specific elements (Derivatives, Ethics, Market Analysis, etc.) or test across all topics
- **Instant feedback** — see correct answers immediately after each pick
- **Review mode** — automatically tracks every question you got wrong; re-test them anytime
- **Bookmarks** — flag tricky questions for later review
- **Progress tracking** — accuracy %, total questions answered, current day streak
- **Shuffled answers** — each session reshuffles A/B/C/D positions so you can't memorize letter patterns
- **Light & dark mode** — automatic, with manual override
- **Works offline** — install to home screen and study without an internet connection
- **No tracking, no accounts** — all data stays on your device in `localStorage`

---

## 📱 Installing on iPhone (recommended)

1. Open the deployed URL in **Safari** (not Chrome — only Safari can install PWAs on iOS)
2. Tap the **Share** button
3. Scroll down and tap **Add to Home Screen**
4. Confirm — the app icon appears on your home screen
5. Open it from the home screen and it runs full-screen, no browser chrome, fully offline-capable

---

## 🚀 Deploying to GitHub Pages (free hosting)

This is a static site with no build step. To host it:

1. **Create a new GitHub repository** (e.g. `cire-study`). Make it public.
2. **Upload all files** from this folder to the repo, preserving the structure:
   ```
   /
   ├── index.html
   ├── styles.css
   ├── app.js
   ├── questions.js
   ├── manifest.json
   ├── service-worker.js
   ├── README.md
   └── icons/
       ├── icon.svg
       ├── icon-192.png
       ├── icon-512.png
       └── apple-touch-icon.png
   ```
   You can do this via the GitHub web UI (drag & drop) or via git.
3. **Enable Pages**:
   - Go to repo **Settings → Pages**
   - Under "Source", select **Deploy from a branch**
   - Select branch: `main`, folder: `/ (root)`
   - Click **Save**
4. **Wait ~1 minute** for the first deploy. GitHub will show your URL — typically `https://<your-username>.github.io/cire-study/`
5. Open that URL in Safari on your iPhone and follow the install steps above.

That's it. To update questions or anything else, just push changes to `main` — Pages re-deploys automatically.

---

## 🖥 Running locally

```bash
cd cire-study
python3 -m http.server 8000
# then open http://localhost:8000
```

(A server is required because service workers don't work via `file://`.)

---

## ⌨️ Keyboard shortcuts (desktop)

- **1–4** — pick answer A–D
- **Enter / Space** — go to next question
- **B** — toggle bookmark on current question

---

## 🗂 Project structure

| File | Purpose |
|------|---------|
| `index.html` | Single-page app shell with all 4 views (home, setup, quiz, summary) |
| `styles.css` | All styling with CSS custom properties for theming |
| `app.js` | App logic — state, sessions, scoring, navigation |
| `questions.js` | All 110 questions with element categorization |
| `manifest.json` | PWA manifest (name, icons, theme) |
| `service-worker.js` | Offline support via cache-first strategy |
| `icons/` | App icons in SVG and PNG (multiple sizes) |

---

## 🔄 Resetting progress

On the home screen, tap **"Reset all progress"** at the bottom. Confirms before clearing.

---

## 📜 Question source

The 110 questions are from the official CIRO Canadian Investment Regulatory Exam (CIRE) Practice Exam document. Each is mapped to one of the 9 syllabus elements:

1. Regulatory framework
2. Prospective client relationships
3. Scope of client relationship
4. Client complaints handling
5. Market and company analysis
6. Market integrity & trade execution
7. Securities, managed products & funds
8. Derivatives
9. Conflicts of interest & ethics

---

## 🛠 Customizing

Want to add or modify questions? Edit `questions.js`. Each entry:

```js
{
  id: "CIRO_E_000017",  // unique ID
  element: 3,            // 1–9
  q: "Question text…",
  options: [
    "Option A text",
    "Option B text",
    "Option C text",
    "Option D text"
  ],
  answer: "C"            // letter of correct option
}
```

Want to change colors or fonts? See the CSS variables at the top of `styles.css` — `--bg`, `--accent`, `--font-serif`, etc. Both light and dark themes are defined there.

---

## License

Personal study use. Question content © CIRO.

Good luck on your exam. 📚
