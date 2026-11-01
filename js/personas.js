// One persona per MBTI type. Fill in name / tagline / description later.
// bestMatch: the drink this one "pairs well with" (default: flip E/I and J/P).
// clash: the opposite type on every axis.
const PERSONAS = {
  INTJ: { name: "INTJ", tagline: "TBD", description: "TBD", bestMatch: "ENTP", clash: "ESFP" },
  INTP: { name: "INTP", tagline: "TBD", description: "TBD", bestMatch: "ENTJ", clash: "ESFJ" },
  ENTJ: { name: "ENTJ", tagline: "TBD", description: "TBD", bestMatch: "INTP", clash: "ISFP" },
  ENTP: { name: "ENTP", tagline: "TBD", description: "TBD", bestMatch: "INTJ", clash: "ISFJ" },

  INFJ: { name: "INFJ", tagline: "TBD", description: "TBD", bestMatch: "ENFP", clash: "ESTP" },
  INFP: { name: "INFP", tagline: "TBD", description: "TBD", bestMatch: "ENFJ", clash: "ESTJ" },
  ENFJ: { name: "ENFJ", tagline: "TBD", description: "TBD", bestMatch: "INFP", clash: "ISTP" },
  ENFP: { name: "ENFP", tagline: "TBD", description: "TBD", bestMatch: "INFJ", clash: "ISTJ" },

  ISTJ: { name: "ISTJ", tagline: "TBD", description: "TBD", bestMatch: "ESTP", clash: "ENFP" },
  ISFJ: { name: "ISFJ", tagline: "TBD", description: "TBD", bestMatch: "ESFP", clash: "ENTP" },
  ESTJ: { name: "ESTJ", tagline: "TBD", description: "TBD", bestMatch: "ISTP", clash: "INFP" },
  ESFJ: { name: "ESFJ", tagline: "TBD", description: "TBD", bestMatch: "ISFP", clash: "INTP" },

  ISTP: { name: "ISTP", tagline: "TBD", description: "TBD", bestMatch: "ESTJ", clash: "ENFJ" },
  ISFP: { name: "ISFP", tagline: "TBD", description: "TBD", bestMatch: "ESFJ", clash: "ENTJ" },
  ESTP: { name: "ESTP", tagline: "TBD", description: "TBD", bestMatch: "ISTJ", clash: "INFJ" },
  ESFP: { name: "ESFP", tagline: "TBD", description: "TBD", bestMatch: "ISFJ", clash: "INTJ" },
};
