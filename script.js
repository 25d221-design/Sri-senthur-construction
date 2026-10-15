
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name =
      form.querySelector('[name="name"]')?.value.trim() || "";
    const phone =
      form.querySelector('[name="phone"]')?.value.trim() || "";
    const service =
      form.querySelector('[name="service"]')?.value || "";
    const location =
      form.querySelector('[name="location"]')?.value.trim() || "";
    const details =
      form.querySelector('[name="details"]')?.value.trim() || "";

    const message =
      "New Project Enquiry - Sri Senthur Construction\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Project Type: " + service + "\n" +
      "Location: " + location + "\n" +
      "Project Details: " + details;

    const recipients = [
      {
        name: "Your Father",
        number: "919786584384"
      },
      {
        name: "You",
        number: "917339331353"
      }
    ];

    const choice = prompt(
      "Send your enquiry to:\n" +
      "1 - Sri Senthur Construction (Founder)\n" +
      "2 - CEO\n\nEnter 1 or 2:"
    );

    const recipient = recipients[Number(choice) - 1];

    if (!recipient) {
      alert("Invalid choice. Please submit the form again.");
      return;
    }

    const whatsappURL =
      "https://wa.me/" +
      recipient.number +
      "?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
});
