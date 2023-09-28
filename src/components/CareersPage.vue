<template>
    <br id="careers-view">
    <div class="container my-1">
        <h1 class="text-center text-dark fw-bold mt-5">CAREERS</h1>
        <hr class="border-secondary border-2 border-dark">
        <div class="container">
            <div id="carouselCareers" class="carousel carousel-fade">
                <div class="carousel-inner overflow-auto p-xl-5 justify-content-center mx-auto">                   
                    <div v-for="(set, index) in careerSets" :key="index" :class="['carousel-item', { active: index === 0 }]">
                        <div v-for="detail in set" :key="detail.id" class="card border-maroon border-2 mx-4 my-4 px-2 w-75 mx-auto">
                            <div class="container">
                                <div class="row justify-content-center allign-items-center">
                                    <div class="col-auto p-0 d-none d-sm-block">
                                        <img src="@/assets/Icons/join.svg" alt="..."/>
                                    </div>
                                    <div class="col px-0">
                                        <div class="card-body allign-text-start px-0">
                                            <h5 class="card-title">{{ detail.jobname }}</h5>
                                            <p class="card-text">{{ detail.location }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="position-absolute top-100 start-50 translate-middle mt-1">
                                    <CareerDetailsPopup :name="detail.id" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" text-center mt-3" >
                    <button class="btn btn-outline-maroon " data-bs-target="#career-list" data-bs-toggle="modal">View All</button>
                </div>

                <!--Left Arrow-->
                <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselCareers" data-bs-slide="prev"
                    style="width: 40px; height: 50px;">
                    <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true"
                        style="width: 50px; height: 50px;"></span>
                </button>
                <!--Right Arrow-->
                <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselCareers" data-bs-slide="next"
                    style="width: 40px; height: 50px;">
                    <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true"
                        style="width: 50px; height: 50px;"></span>
                </button>
            </div>
        </div>
        <hr class="border-secondary border-2 border-dark">
    </div>

</template>

<script>
import careerData from "@/assets/data/careers.json"
import CareerDetailsPopup from './CareerDetailsPopup.vue';

export default {
    components:{
        CareerDetailsPopup,
     },

    data() {
        return {
            careers: careerData,
        };
    },

    computed: {
      careerSets() {
        const sets = [];
        const careersCopy = [...this.careers];
  
        while (careersCopy.length > 0) {
          sets.push(careersCopy.splice(0, 3));
        }
  
        return sets;
      },
    },

}
</script>

<style scoped>
  
</style>