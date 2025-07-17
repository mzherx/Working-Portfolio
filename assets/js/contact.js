// assets/js/contact.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseMsg = document.querySelector(".ajax-response");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.text();

      responseMsg.textContent = result;
      responseMsg.style.color = res.ok ? "green" : "red";

      if (res.ok) {
        form.reset();
      }
    } catch (error) {
      responseMsg.textContent = "An error occurred. Please try again later.";
      responseMsg.style.color = "red";
    }
  });
});
