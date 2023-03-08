import { login } from "../api/auth/login.mjs";

/**
 * Listening for a submit event from form button and calls the login function from auth/login.mjs file. Login data is sent to the API.
 */

export function setFormLoginListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      login(profile);

      alert("Login sucessful! Yey!");

      window.location.href = "../../posts/";
    });
  }
}
