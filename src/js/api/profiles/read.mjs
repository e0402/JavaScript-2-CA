import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/profiles";

export async function getProfiles() {
  const updateProfileURL = `${API_SOCIAL_URL}${action}`;

  const response = await fetchWithToken(updateProfileURL);

  return await response.json();
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("Profile name is required for getting Profile");
  }
  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await fetchWithToken(getProfileURL);

  return await response.json();
}
