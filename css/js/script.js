document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      feedback.textContent = "Thank you! Your message has been received.";
      form.reset();
    });
  }
});
