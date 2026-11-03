const AXES = [
  ["E", "I"],
  ["S", "N"],
  ["T", "F"],
  ["J", "P"],
];

const app = document.getElementById("app");
let current = 0;
let scores = {};

function start() {
  current = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  history.replaceState(null, "", location.pathname);
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[current];
  const progress = Math.round((current / QUESTIONS.length) * 100);

  app.innerHTML = `
    <div class="progress"><div class="progress-fill" style="width:${progress}%"></div></div>
    <p class="count">${current + 1} / ${QUESTIONS.length}</p>
    <h2 class="question">${q.text}</h2>
    <div class="answers">
      ${q.answers.map((a, i) => `<button class="answer" data-i="${i}">${a.text}</button>`).join("")}
    </div>
  `;

  app.querySelectorAll(".answer").forEach((btn) => {
    btn.addEventListener("click", () => {
      scores[q.answers[btn.dataset.i].type]++;
      current++;
      if (current < QUESTIONS.length) renderQuestion();
      else renderResult(getType());
    });
  });
}

function getType() {
  return AXES.map(([a, b]) => (scores[a] >= scores[b] ? a : b)).join("");
}

function renderResult(type) {
  const p = PERSONAS[type];
  const best = PERSONAS[p.bestMatch];
  const clash = PERSONAS[p.clash];
  history.replaceState(null, "", `?type=${type}`);

  app.innerHTML = `
    <p class="eyebrow">You're a regular. You are...</p>
    <h1 class="persona-name">${p.name}</h1>
    <p class="persona-title">${p.title}</p>
    <p class="mbti">${type}</p>
    <p class="tagline">“${p.tagline}”</p>
    <p class="description">${p.description}</p>
    ${hasScores() ? renderBreakdown() : ""}
    <div class="matches">
      <div class="match">
        <p class="match-label">Pairs well with</p>
        <p class="match-name">${best.name}</p>
      </div>
      <div class="match">
        <p class="match-label">Don't share a table with</p>
        <p class="match-name">${clash.name}</p>
      </div>
    </div>
    <button class="primary" id="retake">Take it again</button>
  `;

  document.getElementById("retake").addEventListener("click", start);
}

function hasScores() {
  return Object.values(scores).some((n) => n > 0);
}

function renderBreakdown() {
  return `
    <div class="breakdown">
      ${AXES.map(([a, b]) => {
        const pct = Math.round((scores[a] / (scores[a] + scores[b])) * 100);
        return `
          <div class="axis">
            <span>${a}</span>
            <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
            <span>${b}</span>
          </div>`;
      }).join("")}
    </div>
  `;
}

function renderIntro() {
  app.innerHTML = `
    <p class="eyebrow">🍵 Tea Shop Regulars</p>
    <h1>Which drink are you?</h1>
    <p class="description">You're both a drink and the kind of customer who orders it.
      Answer ${QUESTIONS.length} questions to find your order, and who you pair well with.</p>
    <button class="primary" id="begin">Start</button>
  `;
  document.getElementById("begin").addEventListener("click", start);
}

// ?type=ENFP jumps straight to that result (shareable links, and handy for previewing personas).
const linked = new URLSearchParams(location.search).get("type")?.toUpperCase();
if (linked && PERSONAS[linked]) {
  scores = {};
  renderResult(linked);
} else {
  renderIntro();
}
