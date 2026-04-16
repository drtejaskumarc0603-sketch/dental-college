// ================== ELEMENTS ==================
const form = document.getElementById("appointmentForm");
const submitBtn = document.getElementById("submitBtn");

// ================== FORM SUBMIT ==================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.innerText = "Booking...";

  try {
    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      department: document.getElementById("department").value,
      date: document.getElementById("date").value
    };

    // ✅ basic validation
    if (!data.name || !data.phone || !data.department || !data.date) {
      alert("Please fill all required fields");
      submitBtn.disabled = false;
      submitBtn.innerText = "Book Appointment";
      return;
    }

    // ✅ API call
    const res = await fetch("http://localhost:5000/api/appointments/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Booking failed");
    }

    // ✅ Save appointment ID
    localStorage.setItem("appointmentId", result.id);

    // ✅ Redirect immediately
    window.location.href = "status/status.html";

  } catch (err) {
    console.error(err);
    alert("Error booking appointment");
    submitBtn.disabled = false;
    submitBtn.innerText = "Book Appointment";
  }
});