<template>
    <br  id="projects-view">
    <div class="container my-5">
        <h1 class="text-center text-dark fw-bold mt-5">OUR PROJECTS</h1>
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
                                                    <p class="text-dark" style="font-size: 1.1rem;">{{ set.shortDescription }}</p>
                                                </div>
                                                <button type="button" class="btn btn-outline-maroon" data-bs-toggle="modal"
                                                :data-bs-target="'#projectDetails' + index">
                                                Discover More
                                              </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!--Tablet Partners-->
                                <div class="d-none d-sm-block d-xl-none d-xxl-none h-100 w-100  justify-content-center">
                                    <div class="card h-100 w-75 mx-auto">
                                        <div class="card-body">
                                            <img width="150" height="150" :src="require(`@/assets/projects/${set.image}.png`)" class="card-img-top" alt="..."/>
                                            <div class="text-center">
                                                <h2 class="text-maroon">{{ set.title }}</h2>
                                                <div class="container">
                                                    <p class="text-dark ">{{ set.shortDescription }}</p>
                                                </div>
                                                <button type="button" class="btn btn-outline-maroon" data-bs-toggle="modal"
                                                :data-bs-target="'#projectDetails' + index">
                                                Discover More
                                              </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Phone Partners-->
                                <div class="d-block d-sm-none ">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="card border-0" style="height: 400px;">
                                            <div class="card-body">
                                                <img width="100" height="100" :src="require(`@/assets/projects/${set.image}.png`)" class="card-img-top" alt="..."/>
                                                <div class="text-center">
                                                    <h2 class="text-maroon ">{{ set.title }}</h2>
                                                    <p class="text-dark text-truncate">{{ set.shortDescription }}</p>
                                                    </div>
                                                    <button type="button" class="btn btn-outline-maroon" data-bs-toggle="modal"
                                                    :data-bs-target="'#projectDetails' + index">
                                                    Discover More
                                                  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Left Arrow-->
                        <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselProjects" data-bs-slide="prev" style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true" style="width: 50px; height: 50px;"></span>
                        </button>
                        <!--Right Arrow-->
                        <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselProjects" data-bs-slide="next" style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true" style="width: 50px; height: 50px;"></span>
                        </button>
                        <button type="button" class="btn btn-outline-maroon" data-bs-toggle="modal" data-bs-target="#projectsPopup">
                            View All
                        </button>  
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-secondary border-2 border-dark">
    </div>    

    <!-- Modals for Project Details -->
  <div v-for="(set, index) in projectsData" :key="index" class="modal fade" :id="'projectDetails' + index" tabindex="-1" aria-labelledby="projectDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="projectDetailsModalLabel">{{ set.title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p v-html="set.details"></p>
        <!-- You can display more project details here -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import projectsData from "@/assets/data/projects.json";

export default {
  data() {
    return {
      projectsData: projectsData,
    };
  },
};
</script>

<style scoped>
.nav-link.active {
    background-color: #A70C0C !important;  
    color: #FFFFFF !important; 
}
</style>
