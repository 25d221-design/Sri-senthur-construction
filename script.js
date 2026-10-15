
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector('[name="name"]')?.value.trim() || "";
    const phone = form.querySelector('[name="phone"]')?.value.trim() || "";
    const service = form.querySelector('[name="service"]')?.value || "";
    const location = form.querySelector('[name="location"]')?.value.trim() || "";
    const details = form.querySelector('[name="details"]')?.value.trim() || "";

    const message =
      "New Project Enquiry - Sri Senthur Construction\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Project Type: " + service + "\n" +
      "Location: " + location + "\n" +
      "Project Details: " + details;

    const whatsappURL =
      "https://wa.me/919786584384?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
});
