<template>
    <br  id="partners-view">
    <div class="container-fluid my-5">
        <!--Desktop-->
        <div class="container d-none d-xl-block">
            <h1 class="text-center text-dark fw-bold mt-5">OUR PARTNERS</h1>
            <hr class="border-secondary border-2 border-dark">

            <ul class="nav nav-pills justify-content-center" role="tablist">
                <li class="nav-item mx-3">
                    <a class="nav-link text-maroon active border-1 border border-maroon" 
                    data-bs-toggle="pill" href="#our-partners-desktop">Our Partners</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link text-maroon border-1 border border-maroon" 
                    data-bs-toggle="pill" href="#partner-stories-desktop">Partner Stories</a>
                </li>
            </ul>

            <div class="tab-content my-2 h-100">
                <div id="our-partners-desktop" class="collapse show text-center tab-pane fade active h-100">
                    <PartnersCarousel />
                 </div>
                <div id="partner-stories-desktop" class="collapse text-center tab-pane fade">
                    <StoriesCarousel />
                </div>
            </div>
            <hr class="border-secondary border-2 border-dark">
        </div>

        <!--Tablet-->
        <div class="d-none d-sm-block d-xl-none d-xxl-none">

        </div>

        <!--Mobile-->
        <div class="d-inline d-block d-sm-none">
            <h1 class="text-center text-dark fw-bold">OUR PARTNERS</h1>
            <hr class="my-3 border-secondary border-1">
            <ul class="nav nav-pills justify-content-center" role="tablist">
                <li class="nav-item mx-3">
                    <a class="nav-link text-maroon active border-1 border border-maroon" 
                    data-bs-toggle="pill" href="#our-partners">Our Partners</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link text-maroon border-1 border border-maroon" 
                    data-bs-toggle="pill" href="#partner-stories">Partner Stories</a>
                </li>
            </ul>

            <div class="tab-content my-2 h-100">
                <div id="our-partners" class="collapse show text-center tab-pane fade active h-100">
                    test1
                 </div>
                <div id="partner-stories" class="collapse text-center tab-pane fade">
                    test2
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import PartnersCarousel from './carousels/PartnersListCarousel.vue'
import StoriesCarousel from './carousels/PartnerStoriesCarousel.vue'
export default {
  components:{
    PartnersCarousel,
    StoriesCarousel,
   }
}
</script>

<style scoped>
.nav-link.active {
    background-color: #A70C0C !important;  
    color: #FFFFFF !important; 
}
</style>
