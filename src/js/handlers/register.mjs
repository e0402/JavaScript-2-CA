import { register } from "../api/auth/register.mjs";

/**
 * Listening for a submit event from form button and calls the register function from auth/register.mjs file. Registration data is sent to the API.
 */

export function setFormRegistrationListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      register(profile);

      alert("Registration sucessful! Yey!");

      window.location.href = "../login/";
    });
  }
}
