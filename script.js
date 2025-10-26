// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Optionally, get user data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    // Simple response message
    document.getElementById("formResponse").classList.remove("hidden");
    this.reset();

    // Hide message after 4 seconds
    setTimeout(() => {
      document.getElementById("formResponse").classList.add("hidden");
    }, 4000);
  }
});
