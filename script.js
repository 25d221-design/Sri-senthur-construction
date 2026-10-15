
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contactForm");

  if (!form) {
    console.error("Contact form not found.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="projectType"]').value;
    const location = form.querySelector('[name="location"]').value.trim();
    const details = form.querySelector('[name="message"]').value.trim();

    const message =
      "New Project Enquiry - Sri Senthur Construction\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Project Type: " + service + "\n" +
      "Location: " + location + "\n" +
      "Project Details: " + details;

    const choice = prompt(
      "Choose WhatsApp recipient:\n" +
      "1 - Father (Founder)\n" +
      "2 - Vishnu (CEO)\n\nEnter 1 or 2:"
    );

    let number;

    if (choice === "1") {
      number = "919786584384";
    } else if (choice === "2") {
      number = "917339331353";
    } else {
      alert("Please enter 1 or 2. Submit the form again.");
      return;
    }

    const whatsappURL =
      "https://wa.me/" + number +
      "?text=" + encodeURIComponent(message);

    window.location.href = whatsappURL;
  });
});
