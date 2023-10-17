import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

/**
 * This export function is sending the object data from the registration form to the register URL/API.
 * @param {object} profile Object data from registration form.
 * @returns
 */

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);
  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  return result;
}
