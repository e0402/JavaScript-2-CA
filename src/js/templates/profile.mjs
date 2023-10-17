/**
 * This export function is an HTML profile template with dynamic values inserted to retrieve individual profile info from each user. The function then returns profile.
 * @param {object} profileData Function parameter.
 * @returns Posts is returned.
 */

export function profileTemplateA(profileData) {
  const profile = document.createElement("div");
  profile.innerHTML += `<section class="h-100 gradient-custom-2"">
  <div class="container py-5 h-100">
      <div
      class="row d-flex justify-content-center align-items-center h-100"
      >
      <div class="col col-md-12 col-lg-7">
          <div class="card">
          <div
              class="rounded-top text-white d-flex flex-row green"
              style="height: 200px"
          >
              <div
              class="ms-4 mt-5 d-flex flex-column"
              style="width: 150px"
              >
              <img src="${profileData.avatar}" class="img-fluid img-thumbnail rounded-circle mb-2" style="width: 150px; height: 150px; margin-top:-15px; z-index: 1"></img>
              </div>
              <div class="ms-3" style="margin-top: 130px">
              <h5>${profileData.name}</h5>
              <p>N/A</p>
              </div>
          </div>
          <div class="p-4 text-black" style="background-color: #f8f9fa">
              <div class="d-flex justify-content-end text-center py-1">
              <div>
                  <p class="mb-1 h5">${profileData._count.posts}</p>
                  <p class="small text-muted mb-0">Posts created</p>
              </div>
                  <div class="px-3">
                  <p class="mb-1 h5">${profileData._count.followers}</p>
                  <p class="small text-muted mb-0">Followers</p>
              </div>
              <div>
                  <p class="mb-1 h5">${profileData._count.following}</p>
                  <p class="small text-muted mb-0">Following</p>
              </div>
              </div>
          </div>
          <div class="card-body p-4 text-black">
              <div class="mb-5">
              <p class="lead fw-normal mb-1">About</p>
              <div class="p-4" style="background-color: #f8f9fa">
                  <!-- <p class="font-italic mb-1">Front-end Developer<i class="fab fa-apple ms-3"></i></p>
                  <p class="font-italic mb-1">Lives wherever<i class="fas fa-space-shuttle ms-3"></i></p>
                  <p class="font-italic mb-0">Tall<i class="fas fa-arrow-up ms-3"></i></p> -->
                  <form>

                    <div class="form-outline mb-4">
                        <label
                        class="form-label"
                        for="form2Example27"
                        >Name</label>
                        <input
                            type="text"
                            disabled
                            name="name"
                            placeholder="${profileData.name}"
                            class="form-control form-control-lg"
                        />
                        </div>
    
                    <div class="form-outline mb-4">
                    <label
                    class="form-label"
                    for="form2Example27"
                    >Email</label>
                    <input
                        type="email"
                        disabled
                        name="email"
                        placeholder="${profileData.email}"
                        class="form-control form-control-lg"
                    />
                    </div>
    
                    </form>
                  </div>
              </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<div class="d-flex justify-content-center align-items-center">
  <a
    href="../../posts/"
    class="btn btn-two btn-lg btn-outline-success"
    width=""
    style="
      padding: 8px;
      border-radius: 0.65rem;
      text-decoration: none;
    "
    ;
    >Back to feed</a
  >
</div>`;
  return profile;
}

/**
 * Export template function for rendering single profile as HTML using .map.
 * @param {object} profileData Function parameter indicating single profile.
 * @param {object} parent Function parameter.
 */

export function renderProfileTemplate(profileData, parent) {
  parent.append(profileTemplateA(profileData));
}
