// 🌐 LANGUAGE TOGGLE
const translations = {
  en: {
    collegeName: "Rajarajeshwari Dental College",
    collegeSub: "& Hospital",
    title: "Rajarajeshwari Dental College & Hospital",
    subtitle: "Excellence in Dental Education & Healthcare",
     bookBtn: "Book Appointment",
    locationText: "📍 Bangalore",
    navHome: "Home",
  navAbout: "About ▾",
  navOverview: "Overview",
  navVision: "Vision & Mission",
  navAchievements: "Achievements",

  navDept: "Departments ▾",
  clinicalTitle: "Clinical",
  oralSurgery: "Oral Surgery",
  ortho: "Orthodontics",
  perio: "Periodontics",

  specializedTitle: "Specialized",
  prostho: "Prosthodontics",
  endo: "Endodontics",
  pedo: "Pediatric Dentistry",

  navAdmissions: "Admissions ▾",
  navCourses: "Courses",
  navEligibility: "Eligibility",
  navApply: "Apply Now",

  navStudents: "Students ▾",
  navTimetable: "Timetable",
  navSyllabus: "Syllabus",
  navEvents: "Events",

  navPatients: "Patients",
  navContact: "Contact",
  appo:"Book Appointment",
   appoi:"Book Appointment"
  },

  kn: {
    collegeName: "ರಾಜರಾಜೇಶ್ವರಿ ದಂತ ಕಾಲೇಜು",
    collegeSub: "ಮತ್ತು ಆಸ್ಪತ್ರೆ",
    title: "ರಾಜರಾಜೇಶ್ವರಿ ದಂತ ಕಾಲೇಜು ಮತ್ತು ಆಸ್ಪತ್ರೆ",
    subtitle: "ದಂತ ಶಿಕ್ಷಣ ಮತ್ತು ಆರೋಗ್ಯ ಸೇವೆಯಲ್ಲಿ ಶ್ರೇಷ್ಠತೆ",
    bookBtn: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
    locationText: "📍 ಬೆಂಗಳೂರು",
    navHome: "ಮುಖಪುಟ",
  navAbout: "ನಮ್ಮ ಬಗ್ಗೆ ▾",
  navOverview: "ಸಮಗ್ರ ಮಾಹಿತಿ",
  navVision: "ದೃಷ್ಟಿ ಮತ್ತು ಧ್ಯೇಯ",
  navAchievements: "ಸಾಧನೆಗಳು",

  navDept: "ವಿಭಾಗಗಳು ▾",
  clinicalTitle: "ಕ್ಲಿನಿಕಲ್",
  oralSurgery: "ಮೌಖಿಕ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
  ortho: "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್",
  perio: "ಪೆರಿಯೊಡಾಂಟಿಕ್ಸ್",

  specializedTitle: "ವಿಶೇಷ ವಿಭಾಗಗಳು",
  prostho: "ಪ್ರೋಸ್ಥೋಡಾಂಟಿಕ್ಸ್",
  endo: "ಎಂಡೋಡಾಂಟಿಕ್ಸ್",
  pedo: "ಮಕ್ಕಳ ದಂತ ಚಿಕಿತ್ಸೆ",

  navAdmissions: "ಪ್ರವೇಶ ▾",
  navCourses: "ಪಠ್ಯಕ್ರಮಗಳು",
  navEligibility: "ಅರ್ಹತೆ",
  navApply: "ಈಗಲೇ ಅರ್ಜಿ ಹಾಕಿ",

  navStudents: "ವಿದ್ಯಾರ್ಥಿಗಳು ▾",
  navTimetable: "ವೇಳಾಪಟ್ಟಿ",
  navSyllabus: "ಪಠ್ಯಕ್ರಮ",
  navEvents: "ಕಾರ್ಯಕ್ರಮಗಳು",

  navPatients: "ರೋಗಿಗಳು",
  navContact: "ಸಂಪರ್ಕ",
  appo:"ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
   appoi:"ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

// 🔄 APPLY TRANSLATION
function applyTranslations() {
  Object.keys(translations[currentLang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      el.innerText = translations[currentLang][key];
    }
  });
}

// 🔘 BUTTON CLICK
document.getElementById("langToggle").onclick = () => {
  currentLang = currentLang === "en" ? "kn" : "en";

  // save language
  localStorage.setItem("lang", currentLang);

  // apply translation
  applyTranslations();
};

// 🚀 LOAD ON START
window.addEventListener("DOMContentLoaded", applyTranslations);

// 🤖 CHATBOT
function toggleChat() {
  document.getElementById("chatBox").classList.toggle("hidden");
}

function reply(el) {
  let text = el.innerText;
  let response = "";

  if (text.includes("appointment"))
    response = "You can book via the homepage button.";
  else if (text.includes("timings"))
    response = "9 AM to 5 PM.";
  else
    response = "We are located in Bangalore.";

  document.getElementById("chatResponse").innerText = response;
}

// 📅 MODAL
function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// ✅ FORM SUBMIT
function submitForm() {
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;

  if (name === "" || date === "") {
    alert("Please fill all fields");
    return;
  }

  closeModal();
  showToast("Appointment Booked!");
}

// 🔔 TOAST
function showToast(msg) {
  let toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

// 🍔 MOBILE MENU
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// 🌙 DARK MODE


let slides = document.querySelectorAll(".slide");
let dotsContainer = document.getElementById("dots");

let index = 0;
let interval;

/* CREATE DOTS */
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

/* CHANGE SLIDE */
function showSlide(i) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = i;

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

/* NEXT / PREV */
function nextSlide() {
  showSlide((index + 1) % slides.length);
}

function prevSlide() {
  showSlide((index - 1 + slides.length) % slides.length);
}

/* DOT CLICK */
function goToSlide(i) {
  showSlide(i);
}

/* AUTO PLAY */
function startSlider() {
  interval = setInterval(nextSlide, 4000);
}

function stopSlider() {
  clearInterval(interval);
}

startSlider();

/* PAUSE ON HOVER */
document.querySelector(".hero").addEventListener("mouseover", stopSlider);
document.querySelector(".hero").addEventListener("mouseout", startSlider);

// 🎬 SCROLL REVEAL
let cards = document.querySelectorAll(".achievement-card");

function revealCards() {
  let trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    let top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCards);

let counters = document.querySelectorAll(".counter");

function runCounter() {
  counters.forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let speed = target / 100;

    function update() {
      count += speed;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+";
      }
    }

    update();
  });
}

window.addEventListener("scroll", runCounter, { once: true });


let timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline() {
  let trigger = window.innerHeight * 0.85;

  timelineItems.forEach(item => {
    let top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealTimeline);


// 📖 DATA
const deptData = {
  "Orthodontics": "Smile correction using braces and aligners.",
  "Oral Surgery": "Advanced surgical dental procedures.",
  "Prosthodontics": "Replacement of missing teeth.",
  "Periodontics": "Treatment of gum diseases."
};

// MODAL (reuse your previous modal)
function openDept(name) {
  document.getElementById("deptTitle").innerText = name;
  document.getElementById("deptDesc").innerText = deptData[name];
  document.getElementById("deptModal").classList.remove("hidden");
}

// 🎬 STAGGER ANIMATION
let deptCards = document.querySelectorAll(".dept-card");

function revealDept() {
  let trigger = window.innerHeight * 0.85;

  deptCards.forEach((card, i) => {
    let top = card.getBoundingClientRect().top;

    if (top < trigger) {
      setTimeout(() => {
        card.classList.add("show");
      }, i * 150); // stagger effect
    }
  });
}

window.addEventListener("scroll", revealDept);

// 📊 DATA
const updates = [
  {
    title: "Admissions Open 2028",
    desc: "Apply now for BDS and MDS courses.",
    date: "2026-04-10",
    type: "admission",
    priority: "high",
    link: "#"
  },
  {
    title: "Free Dental Camp",
    desc: "Join our free dental checkup camp this Sunday.",
    date: "2026-04-12",
    type: "camp",
    priority: "medium"
  },
  {
    title: "Holiday Notice",
    desc: "College will remain closed on Friday.",
    date: "2026-04-08",
    type: "notice",
    priority: "low"
  },
  {
    title: "Emergency Alert",
    desc: "Emergency services available 24/7.",
    date: "2026-04-13",
    type: "emergency",
    priority: "high"
  }
];

// 🧠 RENDER CARDS
function renderUpdates(data) {
  let grid = document.getElementById("updatesGrid");
  grid.innerHTML = "";

  data.forEach(u => {
    let isNew = (new Date() - new Date(u.date)) < (3 * 24 * 60 * 60 * 1000);

    grid.innerHTML += `
      <div class="update-card ${u.type}">
        <h3>${u.title}
          ${isNew ? '<span class="badge new">NEW</span>' : ''}
          ${u.priority === 'high' ? '<span class="badge high">HIGH</span>' : ''}
        </h3>
        <p>${u.desc}</p>
        <span class="date">${u.date}</span>
        ${u.link ? `<a href="${u.link}">Learn More →</a>` : ''}
      </div>
    `;
  });
}

// 🔴 TICKER
function renderTicker() {
  let track = document.getElementById("tickerTrack");

  let important = updates
    .filter(u => u.priority === "high")
    .map(u => u.title)
    .join("  |  ");

  track.innerText = important;
}

// 🔘 FILTER
function filterUpdates(type) {
  if (type === "all") renderUpdates(updates);
  else renderUpdates(updates.filter(u => u.type === type));
}

// INIT
renderUpdates(updates);
renderTicker();

let sliderBox = document.getElementById("reviewsSlider");
let reviewItems = document.querySelectorAll(".review-item");
let dotsBox = document.getElementById("reviewDotsBox");

let currentIndex = 0;
let autoSlide;

/* CREATE DOTS */
reviewItems.forEach((_, i) => {
  let d = document.createElement("span");
  d.classList.add("review-dot");
  if (i === 0) d.classList.add("active");

  d.onclick = () => jumpTo(i);
  dotsBox.appendChild(d);
});

let allDots = document.querySelectorAll(".review-dot");

/* UPDATE VIEW */
function updateReviews() {
  sliderBox.style.transform = `translateX(-${currentIndex * 100}%)`;

  reviewItems.forEach(item => item.classList.remove("active"));
  allDots.forEach(dot => dot.classList.remove("active"));

  reviewItems[currentIndex].classList.add("active");
  allDots[currentIndex].classList.add("active");
}

/* NEXT */
function slideForward() {
  currentIndex = (currentIndex + 1) % reviewItems.length;
  updateReviews();
}

/* PREV */
function slideBack() {
  currentIndex = (currentIndex - 1 + reviewItems.length) % reviewItems.length;
  updateReviews();
}

/* DOT CLICK */
function jumpTo(i) {
  currentIndex = i;
  updateReviews();
}

/* AUTO PLAY */
function startReviewsAuto() {
  autoSlide = setInterval(slideForward, 4000);
}

function stopReviewsAuto() {
  clearInterval(autoSlide);
}

startReviewsAuto();

/* PAUSE ON HOVER */
document.querySelector(".reviews-wrapper")
  .addEventListener("mouseover", stopReviewsAuto);

document.querySelector(".reviews-wrapper")
  .addEventListener("mouseout", startReviewsAuto);

/* INIT ACTIVE */
updateReviews();

// NEWSLETTER (UI ONLY)
document.querySelector(".newsletter button").onclick = () => {
  let email = document.querySelector(".newsletter input").value;

  if (!email) {
    alert("Enter email");
  } else {
    alert("Subscribed successfully!");
  }
};

// OPEN
function openModal() {
  document.getElementById("appointmentModal").classList.remove("hidden");
}

// CLOSE
function closeModal() {
  document.getElementById("appointmentModal").classList.add("hidden");
}

// SUBMIT
function submitForm() {
  alert("Appointment booked successfully!");
  closeModal();
}

const aboutLink = document.getElementById("aboutLink");
const dropdown = document.getElementById("aboutDropdown");

// click to open dropdown
aboutLink.addEventListener("click", function (e) {
  e.preventDefault(); // stop page redirect
  dropdown.classList.toggle("active");
});

// click outside = close
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

function toggleMainMenu() {
  document.getElementById("mainMenu").classList.toggle("hidden");
}

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", function(e) {
  const menu = document.getElementById("mainMenu");
  const btn = document.querySelector(".menu-toggle");

  if (!btn.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

function openModal(type) {
  const modal = document.getElementById("achievementModal");
  const body = document.getElementById("modalBody");

  let content = "";

  if(type === "rank") {
    content = `
      <h2>University Rank Achievements</h2>
      <p>Rajarajeswari Dental College students have secured multiple university ranks under RGUHS.</p>
      <ul>
        <li>37 University Ranks</li>
        <li>Gold Medalists in BDS & MDS</li>
        <li>Top performance across departments</li>
      </ul>
    `;
  }

  if(type === "research") {
    content = `
      <h2>Research Excellence</h2>
      <p>Students actively participate in national research programs.</p>
      <ul>
        <li>ICMR STS Grants</li>
        <li>Published scientific papers</li>
        <li>Conference presentations</li>
      </ul>
    `;
  }

  if(type === "infra") {
    content = `
      <h2>Infrastructure</h2>
      <p>Modern dental facilities ensure best clinical exposure.</p>
      <ul>
        <li>250+ Dental Chairs</li>
        <li>400-500 Patients daily</li>
        <li>CBCT Imaging Technology</li>
      </ul>
    `;
  }

  if(type === "global") {
    content = `
      <h2>Global Recognition</h2>
      <p>International exposure and recognition.</p>
      <ul>
        <li>MFDS UK Exam Center</li>
        <li>Top Private Dental College</li>
        <li>International collaborations</li>
      </ul>
    `;
  }

  body.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("achievementModal").style.display = "none";
}