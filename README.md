# Tea Shop Regulars

A short personality quiz that tells you what kind of tea shop regular you are.

Answer 12 quick questions about your tea habits, like where you sit, what you order, and how you handle a botched order or a stack of punch cards. You'll get one of 16 personas, each based on an MBTI type. Your result shows your score on each axis, the regular you pair best with, and the one you'd clash with.

It's a small for-fun project, built with plain HTML, CSS, and JavaScript. There's no framework and no build step.

## The regulars

| Type | Drink | Regular | Tagline |
| --- | --- | --- | --- |
| INTJ | Aged Pu-erh | The Mastermind | "Aged in silence. Been planning this for decades." |
| INTP | Silver Needle White Tea | The Quiet Genius | "Subtle, rare, and way more complex than it looks." |
| ENTJ | Ceremonial Matcha | The Commander | "Whisked to perfection, and expects the same from you." |
| ENTP | Thai Iced Tea | The Debater | "Too much? That's the point." |
| INFJ | Butterfly Pea Flower | The Mystic | "Changes color once you really get to know it." |
| INFP | Lavender Earl Grey | The Daydreamer | "Writing poems in the foam between sips." |
| ENFJ | Honey Ginger | The Healer | "Here to make you feel better, whether you asked or not." |
| ENFP | Brown Sugar Boba | The Wildcard | "Chaotic, sweet, and full of surprises at the bottom." |
| ISTJ | English Breakfast | The Regular Regular | "Same order, same seat, same time. Never once late." |
| ISFJ | Chamomile | The Comfort Keeper | "Everyone's emotional support tea." |
| ESTJ | Hong Kong Milk Tea | The Manager | "Strong, no-nonsense, and done in thirty seconds." |
| ESFJ | Hot Masala Chai | The Host | "Already pouring you a cup before you said yes." |
| ISTP | Genmaicha (toasted rice green tea) | The Fixer | "Toasty, unfussy, and quietly good at everything." |
| ISFP | White Champaca | The Quiet Bloom | "Soft, fragrant, and blooming on its own schedule." |
| ESTP | Sparkling Yuzu Tea | The Thrill Sipper | "Fizzes, pops, and never sits still." |
| ESFP | Hibiscus Punch | The Spotlight | "Bright pink, a little extra, impossible to ignore." |

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
