const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatBox = document.getElementById("chatBox");

const knowledge = [
  {
    keys: ["who are you", "about", "profile", "introduce"],
    text: "I’m Devi Dutta Biswajeet, a PhD student in Materials Engineering at the University of Illinois Chicago. My work sits at the intersection of materials science, machine learning, and scientific language models."
  },
  {
    keys: ["research", "interests", "focus", "work on"],
    text: "Devi’s research focuses on machine learning and large language models for materials synthesis, especially high-pressure materials, graphene, and diamond, with an emphasis on tools experimentalists can use."
  },
  {
    keys: ["award", "achievement", "teaching", "mentor"],
    text: "Highlights include the 2025 College of Engineering Exceptional Teaching Promise Award, mentoring a state-level science fair gold-award-winning project, presenting at the SSAP Symposium, and reviewing for Nature Communications."
  },
  {
    keys: ["publication", "papers", "scholar", "citations"],
    text: "The profile features journal papers, preprints, and current work in materials AI, with Google Scholar metrics of 26 citations, h-index 3, and i10-index 1."
  },
  {
    keys: ["saved", "reading", "liked papers", "inspiration"],
    text: "The reading list emphasizes materials AI, data extraction from literature, active learning, and frontier science-agent systems—closely aligned with Devi’s current research direction."
  },
  {
    keys: ["contact", "collaborate", "linkedin", "email"],
    text: "You can collaborate by connecting on LinkedIn or emailing dbiswa4@uic.edu."
  }
];

function answerQuestion(input) {
  const q = input.toLowerCase();
  const match = knowledge.find(item => item.keys.some(k => q.includes(k)));
  if (match) return match.text;
  return "I can answer questions about Devi’s research interests, awards, publications, reading list, and collaboration details. Try asking about research, papers, awards, or how to collaborate.";
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
  addMessage(reply, "assistant");
  chatInput.value = "";
}

chatSend.addEventListener("click", sendMessage);
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
