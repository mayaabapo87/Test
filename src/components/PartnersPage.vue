<template>

        <section id="partners-view" class=" py-5"  style="background-color: #e9ecef;">
  
    <div class="container mt-5">
        <h1 class="text-center text-dark fw-bold ">OUR PARTNERS</h1>
        <hr class="border-secondary border-2 border-dark">
        <ul class="nav nav-pills justify-content-center" role="tablist">
            <li class="nav-item mx-3">
                <a class="nav-link text-maroon active border-1 border border-maroon" data-bs-toggle="pill" href="#ourPartners">Our Partners</a>
            </li>
            <li class="nav-item mx-3">
                <a class="nav-link text-maroon border-1 border border-maroon" data-bs-toggle="pill" href="#partnerStories">Partner Stories</a>
            </li>
        </ul>
        <div class="tab-content my-2 h-100">
            <div id="ourPartners" class="collapse show text-center tab-pane fade active h-100">
                <div class="container">
                    <div id="carouselPartners" class="carousel my-auto carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner my-2">
                            <div v-for="(set, index) in partnerData" :key="index" :class="['carousel-item', { active: index === 0 }]">
                                <!--Desktop Partners-->
                                <div class="d-none d-xl-block">
                                    <div class="d-flex justify-content-center">
                                        <div class="card border-1  w-75">
                                            <div class="card-body">
                                                <img width="150" height="150" :src="require(`@/assets/logos/${set.icon}.svg`)" class="card-img-top" alt="..."/>
                                                <div class="text-center">
                                                    <h2 class="text-maroon">{{ set.name }}</h2>
                                                    <p class=" text-dark text-truncate">{{ set.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Tablet Partners-->
                                <div class="d-none d-sm-block d-xl-none d-xxl-none h-100 w-100  justify-content-center">
                                    <div class="card h-100 w-75 mx-auto">
                                        <div class="card-body">
                                            <img width="150" height="150" :src="require(`@/assets/logos/${set.icon}.svg`)" class="card-img-top" alt="..."/>
                                            <div class="text-center">
                                                <h2 class="text-maroon">{{ set.name }}</h2>
                                                <div class="container">
                                                    <p class="text-dark text-truncate">{{ set.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Phone Partners-->
                                <div class="d-block d-sm-none ">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="card border-0" style="height: 300px;">
                                            <div class="card-body">
                                                <img width="100" height="100" :src="require(`../assets/logos/${set.icon}.svg`)" class="card-img-top" alt="..."/>
                                                <div class="text-center">
                                                    <h2 class="text-maroon ">{{ set.name }}</h2>
                                                    <p class="text-truncate">{{ set.description }}</p>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Left Arrow-->
                        <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselPartners" data-bs-slide="prev" style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true" style="width: 50px; height: 50px;"></span>
                        </button>
                        <!--Right Arrow-->
                        <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselPartners" data-bs-slide="next" style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true" style="width: 50px; height: 50px;"></span>
                        </button>
                        <button type="button" class="btn btn-outline-maroon" data-bs-toggle="modal" data-bs-target="#partnersPopup">
                            View All
                        </button>  
                    </div>
                </div>
            </div>
            <div id="partnerStories" class="collapse text-center tab-pane fade">
                <div class="container">
                    <div id="carouselStories" class="carousel mt-2 carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div v-for="(set, index) in storiesData" :key="index" :class="['carousel-item', { active: index === 0 }]">
                                    <!--Desktop Stories-->
                                    <div class="d-none d-xl-block">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <div class="text-center text-dark w-75" style="height: auto;">
                                                <p>{{ set.story }}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!--Tablet Stories-->
                                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                                        <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
                                            <div class="card border-0 border" style="width: 100%;">
                                                <div class="card-body">
                                                <div class="text-center">
                                                    <p class="text-dark">{{ set.story }}</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!--Phone Stories-->
                                    <div class="d-block d-sm-none">
                                        <div class="d-flex justify-content-center align-items-center vertical-scrollable" style="height: 100%;">
                                            <div class="card border-0 border" style="width: 100%;">
                                                <div class="card-body">
                                                <div class="text-center">
                                                    <p class="text-dark">{{ set.story }}</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--Left Arrow-->
                            <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselStories" data-bs-slide="prev"
                            style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true"
                            style="width: 50px; height: 50px;"></span>
                            </button>
                            
                            <!--Right Arrow-->
                            <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselStories" data-bs-slide="next"
                            style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true"
                            style="width: 50px; height: 50px;"></span>
                            </button>
                            <button type="button" class="btn btn-outline-maroon" data-bs-toggle="modal" data-bs-target="#partners-stories">
                                View All
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-secondary border-2 border-dark">
    </div>    
</section>
</template>

<script>
import storiesData from "@/assets/data/stories.json"
import partnerData from "@/assets/data/partners.json";


export default {
    components:{
    },
    data() {
        return {
            partnerData: partnerData,
            storiesData: storiesData, 

        };
    },
}
</script>

<style scoped>
.nav-link.active {
    background-color: #A70C0C !important;  
    color: #FFFFFF !important; 
}
</style>
