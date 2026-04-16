const sections = [
  { text: document.getElementById("text1"), card: document.getElementById("card1") },
  { text: document.getElementById("text2"), card: document.getElementById("card2") },
  { text: document.getElementById("text3"), card: document.getElementById("card3") },
  { text: document.getElementById("text4"), card: document.getElementById("card4") },
  { text: document.getElementById("text5"), card: document.getElementById("card5") }
];
function reveal() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(sec => {
    if (sec.text.getBoundingClientRect().top < trigger) {
      sec.text.classList.add("show");
    }

    if (sec.card.getBoundingClientRect().top < trigger) {
      sec.card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
