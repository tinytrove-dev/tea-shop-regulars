// One persona per MBTI type: name is the drink, title is the kind of regular who orders it.
// Fill in description later.
// bestMatch: the drink this one "pairs well with" (default: flip E/I and J/P).
// clash: the opposite type on every axis.
const PERSONAS = {
  INTJ: { name: "Aged Pu-erh", title: "The Mastermind", tagline: "Aged in silence. Been planning this for decades.", description: "TBD", bestMatch: "ENTP", clash: "ESFP" },
  INTP: { name: "Silver Needle White Tea", title: "The Quiet Genius", tagline: "Subtle, rare, and way more complex than it looks.", description: "TBD", bestMatch: "ENTJ", clash: "ESFJ" },
  ENTJ: { name: "Ceremonial Matcha", title: "The Commander", tagline: "Whisked to perfection, and expects the same from you.", description: "TBD", bestMatch: "INTP", clash: "ISFP" },
  ENTP: { name: "Thai Iced Tea", title: "The Debater", tagline: "Too much? That's the point.", description: "TBD", bestMatch: "INTJ", clash: "ISFJ" },

  INFJ: { name: "Butterfly Pea Flower", title: "The Mystic", tagline: "Changes color once you really get to know it.", description: "TBD", bestMatch: "ENFP", clash: "ESTP" },
  INFP: { name: "Lavender Earl Grey", title: "The Daydreamer", tagline: "Writing poems in the foam between sips.", description: "TBD", bestMatch: "ENFJ", clash: "ESTJ" },
  ENFJ: { name: "Honey Ginger", title: "The Healer", tagline: "Here to make you feel better, whether you asked or not.", description: "TBD", bestMatch: "INFP", clash: "ISTP" },
  ENFP: { name: "Brown Sugar Boba", title: "The Wildcard", tagline: "Chaotic, sweet, and full of surprises at the bottom.", description: "TBD", bestMatch: "INFJ", clash: "ISTJ" },

  ISTJ: { name: "English Breakfast", title: "The Regular Regular", tagline: "Same order, same seat, same time. Never once late.", description: "TBD", bestMatch: "ESTP", clash: "ENFP" },
  ISFJ: { name: "Chamomile", title: "The Comfort Keeper", tagline: "Everyone's emotional support tea.", description: "TBD", bestMatch: "ESFP", clash: "ENTP" },
  ESTJ: { name: "Hong Kong Milk Tea", title: "The Manager", tagline: "Strong, no-nonsense, and done in thirty seconds.", description: "TBD", bestMatch: "ISTP", clash: "INFP" },
  ESFJ: { name: "Hot Masala Chai", title: "The Host", tagline: "Already pouring you a cup before you said yes.", description: "TBD", bestMatch: "ISFP", clash: "INTP" },

  ISTP: { name: "Genmaicha (toasted rice green tea)", title: "The Fixer", tagline: "Toasty, unfussy, and quietly good at everything.", description: "TBD", bestMatch: "ESTJ", clash: "ENFJ" },
  ISFP: { name: "White Champaca", title: "The Quiet Bloom", tagline: "Soft, fragrant, and blooming on its own schedule.", description: "TBD", bestMatch: "ESFJ", clash: "ENTJ" },
  ESTP: { name: "Sparkling Yuzu Tea", title: "The Thrill Sipper", tagline: "Fizzes, pops, and never sits still.", description: "TBD", bestMatch: "ISTJ", clash: "INFJ" },
  ESFP: { name: "Hibiscus Punch", title: "The Spotlight", tagline: "Bright pink, a little extra, impossible to ignore.", description: "TBD", bestMatch: "ISFJ", clash: "INTJ" },
};
