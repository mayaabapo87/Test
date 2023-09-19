<template>
  <section id="projects-view" class=" py-5" style="background-color: #ccc;">
  <div class="container mt-5">
    <h1 class="text-center text-dark fw-bold mt-4">OUR PROJECTS</h1>
    <hr class="border-secondary border-2 border-dark">
    <div class="tab-content my-2 h-100">
      <div id="ourProjects" class="collapse show text-center tab-pane fade active h-100">
        <div class="container">
          <div id="carouselProjects" class="carousel my-auto carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner my-2">
              <div v-for="(set, index) in projectsData" :key="index" :class="['carousel-item', { active: index === 0 }]">
                <!--Desktop Partners-->
                <div class="d-none d-xl-block">
                  <div class="d-flex justify-content-center">
                    <div class="card border-1  w-75" style="height:350px">
                      <div class="card-body">
                        <div class="text-center">
                          <img style="max-width: 30%; max-height: 10%;"
                            :src="require(`@/assets/projects/${set.image}.png`)" class="card-img-top" alt="..." />
                        </div>
                        <div class="text-center">
                          <h2 class="text-maroon">{{ set.title }}</h2>
                          <p class="text-dark" style="font-size: 1.1rem;">{{ set.shortdescription }}</p>
                        </div>
                        <button type="button" class="button-more btn-outline-maroon" data-bs-toggle="modal"
                          :data-bs-target="'#projectDetails' + index">
                          Learn More
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

                <!--Tablet Partners-->
                <div class="d-none d-sm-block d-xl-none d-xxl-none h-100 w-100  justify-content-center">
                  <div class="card h-100 w-75 mx-auto">
                    <div class="card-body">
                      <img :src="require(`@/assets/projects/${set.image}.png`)" class="card-img-top tablet-image img-fluid" alt="..." />
                      <div class="text-center">
                        <h2 class="text-maroon">{{ set.title }}</h2>
                        <div class="container">
                          <p class="text-dark ">{{ set.shortdescription }}</p>
                        </div>
                        <button type="button" class="button-more btn-outline-maroon" data-bs-toggle="modal"
                          :data-bs-target="'#projectDetails' + index">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!--Phone Partners-->
                <div class="d-block d-sm-none ">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="card border-0" >
                      <div class="card-body">
                        <img :src="require(`@/assets/projects/${set.image}.png`)"
                          class="card-img-top phone-image img-fluid"  alt="..." />
                        <div class="text-center">
                          <h2 class="text-maroon ">{{ set.title }}</h2>
                          <p class="text-dark ">{{ set.shortdescription }}</p>
                        </div>
                        <button type="button" class="button-more btn-outline-maroon" data-bs-toggle="modal"
                          :data-bs-target="'#projectDetails' + index">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Left Arrow-->
            <button class="carousel-control-prev top-50 start-0 translate-middle" type="button"
              data-bs-target="#carouselProjects" data-bs-slide="prev" style="width: 40px; height: 50px;">
              <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true"
                style="width: 50px; height: 50px;"></span>
            </button>
            <!--Right Arrow-->
            <button class="carousel-control-next top-50 start-100 translate-middle" type="button"
              data-bs-target="#carouselProjects" data-bs-slide="next" style="width: 40px; height: 50px;">
              <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true"
                style="width: 50px; height: 50px;"></span>
            </button>
            <button type="button" class="button-view" data-bs-toggle="modal" data-bs-target="#projectsPopup">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-secondary border-2 border-dark">
  </div>
  </section>

  <!-- Modals for Project Details -->
  <div v-for="(set, index) in projectsData" :key="index" class="modal fade" :id="'projectDetails' + index" tabindex="-1"
    aria-labelledby="projectDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="projectDetailsModalLabel">{{ set.title }}</h5>
          <button type="button" class="close " data-bs-dismiss="modal" aria-label="Close" >
          </button>
        </div>
        <div class="modal-body">
          <p style="text-align:justify" v-html="set.details"></p>
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
      projectsData: [],
    };
  },
  created() {
    
    this.fetchProjectsData();
  },
  methods: {
    async fetchProjectsData() {
      try {
        const response = await fetch('http://localhost:3000/projects'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.projectsData = await response.json();
        console.log(this.projectsData); // Log the fetched data
      } catch (error) {
        console.error('Error fetching project data', error);
      }
    },
  },
};
</script>
<style scoped>

.tablet-image {
  max-width: 70%;
  height: auto;
}
.phone-image {
  max-width: 70%;
  height: auto;
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

/* MODERN MORE BUTTON  */
.button-more {
  background: linear-gradient(to bottom right, #EF4765, #ac0c0c);
  border: 0;
  border-radius: 12px;
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

/* MODERN VIEW ALL BUTTON */
.button-view {
  
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01,sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  margin-bottom: 2%;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;
  margin-top: 2%;
}

@media (min-width: 768px) {
  .button-view {
    padding: 19px 32px;
  }
}

.button-view:before,
.button-view:after {
  border-radius: 80px;
}

.button-view:before {
  background-color: rgb(249, 58, 19, .32);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button-view:after {
  background-color: initial;
  background-image: linear-gradient(92.83deg, #ff4040 0, #ac0c0c  100%);
  bottom: 4px;
  content: "";
  display: block;
  left: 4px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
  transition: all 100ms ease-out;
  z-index: -1;
}

.button-view:hover:not(:disabled):after {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition-timing-function: ease-in;
}

.button-view:active:not(:disabled) {
  color: #ccc;
}

.button-view:active:not(:disabled):after {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  bottom: 4px;
  left: 4px;
  right: 4px;
  top: 4px;
}

.button-view:disabled {
  cursor: default;
  opacity: .24;
}

</style>