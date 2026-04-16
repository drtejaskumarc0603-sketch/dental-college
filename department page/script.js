const rows = document.querySelectorAll(".dept-row");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  rows.forEach(row => {
    if (row.getBoundingClientRect().top < trigger) {
      row.classList.add("show");
    }
  });
});