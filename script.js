const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatBox = document.getElementById("chatBox");

const knowledge = [
  {
    keys: ["who are you", "about", "profile", "introduce yourself", "introduction"],
    text: "I’m Devi Dutta Biswajeet, a PhD student in Materials Engineering at the University of Illinois Chicago. My work brings together materials science, machine learning, and scientific language models to study synthesis and discovery."
  },
  {
    keys: ["research", "interests", "focus", "work on", "what do you work on"],
    text: "Devi’s research focuses on machine learning and large language models for materials synthesis, with particular interest in high-pressure materials, graphene, diamond, scientific literature extraction, and experiment-aware AI tools."
  },
  {
    keys: ["high pressure", "graphene", "diamond", "materials synthesis", "synthesis"],
    text: "The main materials themes on this profile are high-pressure materials, graphene, and diamond synthesis, especially in settings where language, process knowledge, and limited data all matter."
  },
  {
    keys: ["llm", "language model", "language models", "scientific language", "nlp"],
    text: "A central theme of Devi’s work is using large language models and scientific text to recover synthesis knowledge, structure information, and support materials research under data scarcity."
  },
  {
    keys: ["award", "achievement", "teaching", "mentor", "mentoring", "highlight"],
    text: "Highlights include the 2025 College of Engineering Exceptional Teaching Promise Award, mentoring a student project that won a state-level science fair gold award, presenting at the SSAP Symposium, and serving as a reviewer for Nature Communications."
  },
  {
    keys: ["publication", "papers", "paper", "scholar", "citations", "h-index", "i10"],
    text: "The profile features journal papers, preprints, and current work in materials AI. Current metrics shown here include 26 Google Scholar citations, h-index 3, and i10-index 1."
  },
  {
    keys: ["featured papers", "best papers", "selected papers", "publications list"],
    text: "Featured papers on this site include work on large language models for graphene synthesis, molecular dynamics of CNT-reinforced nanocrystalline Al nanocomposites, blast furnace ironmaking optimization, and reflections from the 2024 materials science LLM hackathon."
  },
  {
    keys: ["reading", "reading list", "saved", "liked papers", "inspiration"],
    text: "The reading list emphasizes materials AI, data extraction from literature, active learning, scientific agents, and foundation-model workflows for research—closely aligned with Devi’s current research direction."
  },
  {
    keys: ["cv", "resume", "curriculum vitae"],
    text: "You can open Devi’s CV directly from the site using the CV button in the hero or connect section."
  },
  {
    keys: ["contact", "collaborate", "linkedin", "email", "reach out"],
    text: "You can collaborate by connecting on LinkedIn or by emailing dbiswa4@uic.edu."
  },
  {
    keys: ["orcid", "researchgate", "google scholar"],
    text: "This site includes direct links to Devi’s LinkedIn, Google Scholar, ORCID, ResearchGate, email, and CV for quick access."
  }
];

const suggestions = [
  "Try asking about research interests.",
  "You can ask about awards or mentoring.",
  "Try asking about featured papers.",
  "You can also ask how to collaborate.",
  "Ask about the reading list or publications."
];

function normalizeText(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").trim();
}

function answerQuestion(input) {
  const q = normalizeText(input);

  if (!q) {
    return "Ask about research interests, papers, awards, reading list, or collaboration.";
  }

  const directMatch = knowledge.find(item =>
    item.keys.some(key => q.includes(normalizeText(key)))
  );

  if (directMatch) return directMatch.text;

  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return "Hello — I can help with questions about Devi’s research, publications, achievements, and collaboration details.";
  }

  if (q.includes("thanks") || q.includes("thank you")) {
    return "Glad to help. You can also ask about research themes, featured papers, or how to connect.";
  }

  const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
  return `I can answer questions about Devi’s research interests, awards, publications, reading list, and collaboration details. ${randomSuggestion}`;
}

function addMessage(text, role) {
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, "user");

  const reply = answerQuestion(text);

  setTimeout(() => {
    addMessage(reply, "assistant");
  }, 180);

  chatInput.value = "";
}

if (chatSend) {
  chatSend.addEventListener("click", sendMessage);
}

if (chatInput) {
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}
