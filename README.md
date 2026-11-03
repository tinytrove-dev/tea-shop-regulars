# Tea Shop Regulars

A short personality quiz that tells you what kind of tea shop regular you are.

Answer 12 quick questions about your tea habits, like where you sit, what you order, and how you handle a botched order or a stack of punch cards. You'll get one of 16 personas, each based on an MBTI type. Your result shows your score on each axis, the regular you pair best with, and the one you'd clash with.

It's a small for-fun project, built with plain HTML, CSS, and JavaScript. There's no framework and no build step.

## Play

Live at **https://kamlesa.github.io/tea-shop-regulars/**

To run it locally, open `index.html` in a browser.

## Project layout

- `index.html`: the page shell
- `styles.css`: all styling
- `js/questions.js`: quiz questions; each answer adds a point to one MBTI letter
- `js/personas.js`: the 16 personas, plus each one's best match and clash
- `js/quiz.js`: quiz flow, scoring, and the results screen

## Deployment

Every push to `main` deploys the site to GitHub Pages through `.github/workflows/deploy-pages.yml`.
