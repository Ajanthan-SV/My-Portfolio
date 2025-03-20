import emailjs from "@emailjs/browser";

export function sendEmail() {
  const name = document.querySelector("#name")?.value;
  const email = document.querySelector("#email")?.value;
  const subject = document.querySelector("#subject")?.value;
  const message = document.querySelector("#message")?.value;

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const templateParams = { name, email, subject, message };

  emailjs
    .send("service_g7rtiam", "template_bvfkza9", templateParams, "HfrG1txmH39aCH93N") // Add your EmailJS public key
    .then(() => {
      alert("Email sent successfully!");
      // Clear fields after sending
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#subject").value = "";
      document.querySelector("#message").value = "";
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    });
}
