<template>
  <div class="modal fade" id="projectsPopup" tabindex="-1" aria-labelledby="partners-popupLabel" aria-hidden="true">
      <div class="modal-xl modal-dialog-centered modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title d-none d-lg-block" id="partners-popupLabel">Partners</h5>
                  <form class="row align-items-center mx-auto w-75">
                      <label class="visually-hidden" for="searchInput">Search</label>
                      <div class="input-group">
                          <div class="input-group-text">
                              <img width="30" height="30" src="../../assets/icons/search.svg" alt="...">
                          </div>
                          <input v-model="searchQuery" type="text" class="form-control" id="searchInput" placeholder="Search...">
                      </div>
                  </form>
                  <button type="button" class="close " data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="row justify-content-center">
                      <div v-for="(set, index) in filteredPartners" :key="index" class="col-lg-5 my-1">
                          <div class="card border-1 border h-100">
                              <div class="card-body">
                                  <div class="container text-center">
                                    <img :src="require(`@/assets/projects/${set.image}.png`)" class="card-img-top custom-image" alt="..." />
                                      <h5 class="card-title text-maroon"  v-html="set.title"></h5>
                                      <p class="fs-6 text-dark"  v-html="set.shortdescription"></p>
                                  </div>
                              </div>
                              <button type="button" class="button-more btn-outline-maroon" data-bs-toggle="modal"
                              :data-bs-target="'#projectDetails' + index">
                              Learn More
                            </button>
                          </div>
                      </div>
                  </div>
               </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                      <path d="M5.354 8L0 3.293 1.293 2 8 8.707 14.707 2 16 3.293 10.646 8 16 12.707 14.707 14 8 9.293 1.293 16 0 14.707 5.354 8 0 2.293 1.293 1 8 6.707 14.707 1 16 2.293 10.646 8z"/>
                    </svg>
                    Close
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      searchQuery: "",
    };
  },

  created() {
    this.fetchProjectsData();
  },

  methods: {
    async fetchProjectsData() {
      try {
        const response = await fetch("http://localhost:3000/projects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        this.projects = await response.json();
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    },
  },

  computed: {
    filteredPartners() {
      return this.projects.filter((project) => {
        const searchMatch = project.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        return searchMatch;
      });
    },
  },
};
</script>

<style scoped>

.custom-image {
    width: 80%;
    height: 50%; 
  }
/* MODERN MORE BUTTON  */
.button-more {
    background: linear-gradient(to bottom right, #EF4765, #ac0c0c);
    border: 0;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 15px;
    font-weight: 500;
    margin-top: 1%;
    outline: transparent;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
  }
  
  .button-more:not([disabled]):focus {
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
  }
  
  .button-more:not([disabled]):hover {
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
  }

 /* MODERN CLOSE BUTTON */
.close {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, #ff5733, #ac0c0c);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .close::before,
  .close::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 12px;
    top: 50%; 
    left: 50%; 
    background-color: #fff;
    transform: translate(-50%, -50%); 
  }
  
  .close::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  .close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  
  .close:hover {
    transform: scale(1.2);
  }
</style>