// Initialize EmailJS
(function () {
  emailjs.init("7RomIQNJLLMrBEuXE"); // Sign up at emailjs.com to get this
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .send("service_9cxrc8j", "template_3x5fjzv", {
      to_email: "prassorrow@gmail.com",
      from_name: this.name.value,
      from_email: this.email.value,
      message: `New subscription from ${this.name.value}`,
    })
    .then(
      function () {
        alert("Thanks for subscribing!");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        alert("Well, I'm sorry. Something went wrong.");
      }
    );
});
