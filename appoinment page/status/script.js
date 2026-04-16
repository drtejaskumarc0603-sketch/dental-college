// 🚀 ACTIONS

const id = localStorage.getItem("appointmentId");

async function checkStatus() {
    const res = await fetch(`http://localhost:5000/api/appointments/status/${id}`);
    const data = await res.json();

    document.getElementById("status").innerText = data.status;
}

checkStatus();

function goHome() {
  window.location.href="../../home page/index.html";
}

function reschedule() {
   window.location.href = "../appoiment.html";
}

function cancel() {
  if(confirm("Are you sure you want to cancel the appointment?")) {
    alert("Appointment Cancelled");
  }
}

function getDirections() {
  window.open("https://www.google.com/maps", "_blank");
}

function downloadReceipt() {
  alert("Downloading receipt...");
}

// ✨ OPTIONAL: Dynamic Data (future backend use)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Appointment Status Loaded");
});