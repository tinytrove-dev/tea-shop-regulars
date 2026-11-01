// Each answer adds a point to one MBTI letter.
// Keep an odd number of questions per axis (E/I, S/N, T/F, J/P) so there are no ties.
const QUESTIONS = [
  {
    text: "You walk into the tea shop. Where do you sit?",
    answers: [
      { text: "The big communal table. Maybe I'll make a friend.", type: "E" },
      { text: "Corner seat by the window, headphones in.", type: "I" },
    ],
  },
  {
    text: "Scanning the menu, you...",
    answers: [
      { text: "Order the thing I already know I like.", type: "S" },
      { text: "Pick whichever drink has the weirdest name.", type: "N" },
    ],
  },
  {
    text: "The barista gets your order wrong.",
    answers: [
      { text: "Politely point it out. It's an easy fix.", type: "T" },
      { text: "Drink it anyway. They looked so stressed.", type: "F" },
    ],
  },
  {
    text: "How do you handle loyalty punch cards?",
    answers: [
      { text: "One card, kept flat in my wallet, 9/10 stamps.", type: "J" },
      { text: "I have six of them. Each one has two stamps.", type: "P" },
    ],
  },
  {
    text: "A friend invites you to a tea tasting full of strangers.",
    answers: [
      { text: "I'm in, and I'm bringing a plus-one.", type: "E" },
      { text: "Only if I can sit next to you the entire time.", type: "I" },
    ],
  },
  {
    text: "Someone offers to read your tea leaves.",
    answers: [
      { text: "It's... leaves. But sure.", type: "S" },
      { text: "Mine mentioned a journey and I've thought about it all week.", type: "N" },
    ],
  },
  {
    text: "Your friend asks if their homemade kombucha is good. It is not.",
    answers: [
      { text: "Honest feedback, plus a few suggestions.", type: "T" },
      { text: "\"It's so... unique! I love that you made it.\"", type: "F" },
    ],
  },
  {
    text: "The shop is out of your usual.",
    answers: [
      { text: "Day slightly ruined. Luckily I have a backup order.", type: "J" },
      { text: "Ooh, an excuse to try something new.", type: "P" },
    ],
  },
  {
    text: "After a long week, your ideal tea time is...",
    answers: [
      { text: "A boba run with the whole group chat.", type: "E" },
      { text: "Kettle, blanket, book, nobody.", type: "I" },
    ],
  },
  {
    text: "Which menu description pulls you in?",
    answers: [
      { text: "\"Black milk tea, brown sugar, chewy pearls.\"", type: "S" },
      { text: "\"Tastes like a rainy afternoon in a bookshop.\"", type: "N" },
    ],
  },
  {
    text: "What makes you a regular somewhere?",
    answers: [
      { text: "Consistent quality at a fair price.", type: "T" },
      { text: "The owner remembers my name.", type: "F" },
    ],
  },
  {
    text: "Making tea at home, you...",
    answers: [
      { text: "Exact water temperature, timer set.", type: "J" },
      { text: "Eyeball it, forget it's steeping, drink it anyway.", type: "P" },
    ],
  },
];
