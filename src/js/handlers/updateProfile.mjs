import { getProfile, updateProfile } from "../api/profiles/index.mjs";

import { load } from "../storage/index.mjs";

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");
  const setAvatar = document.querySelector("#avatar");
  const firstName = document.querySelector("#firstName");
  // const setBanner = document.querySelector("#setBanner");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const postCount = document.querySelector("#postCount");

  if (form) {
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    setAvatar.innerHTML = `<img src="${profile.avatar}"
    class="img-fluid img-thumbnail rounded-circle mb-2"
    style="width: 150px; height: 150px; margin-top:-15px; z-index: 1"></img>`;

    //NB deactivated. Add id in HTML to activate
    // setBanner.innerHTML = `<img src="${profile.banner}"></img>`;

    firstName.innerHTML = `${profile.name}`;
    followers.innerHTML = `${profile._count.followers}`;
    following.innerHTML = `${profile._count.following}`;
    postCount.innerHTML = `${profile._count.posts}`;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      //Send it to api
      updateProfile(profile);
      alert("Profile successfully updated! Refresh page to see changes.");
    });
  }
}
