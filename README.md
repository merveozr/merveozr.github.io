# Merve Özer — Portfolio Website

A bilingual (EN/TR) personal portfolio built with pure **HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build tools.

## 🚀 Getting Started

1. Clone or download this repository.
2. Place your CV PDF inside `assets/cv/` and name it `Merve_Ozer_CV.pdf` (or update the `href` in `index.html`).
3. Add project screenshots to `assets/images/` and update the `image` field in the `projects` array inside `script.js`.
4. Open `index.html` directly in a browser — no server or build step required.

## 📁 Project Structure

portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── cv/
└── README.md

## ✏️ Customization

- **Content:** All text lives in the `translations` object and the `projects` / `experiences` / `skillCategories` / `certificates` arrays at the top of `script.js`. Edit there — no HTML digging required.
- **Colors:** Adjust CSS custom properties at the top of `style.css` (`:root`).
- **Placeholders:** Search for `"#"` and `null` in `script.js` — these mark GitHub URLs, project images, and the publication URL waiting to be filled in.

## 🌐 Language System

Default language is English. Users can switch via the `EN | TR` toggle in the navbar; the choice persists via `localStorage`.

## ♿ Accessibility

Semantic HTML, ARIA labels, keyboard navigation, focus states, and `prefers-reduced-motion` support are built in.
# merveozr.github.io
