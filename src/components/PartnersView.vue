<template>
    <br id="partners-view">
    <br>
     <div class="partner-container my-5">
        <div class="container border text-center">
            <div class="row">
                <h4 class="container text-center py-3 maroon-a2 work2-f-size">
                    OUR PARTNERS
                </h4>
            </div>
            <div class="row">
                <div class="container">
                    <ul class="nav custom-nav-pills justify-content-center" role="tablist">
                        <li class="nav-item mx-3">
                            <a class="nav-link active" data-bs-toggle="pill" href="#our-partners">Our Partners</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" data-bs-toggle="pill" href="#partner-stories">Partner Stories</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content border my-2">
                <div id="our-partners" class="collapse show text-center tab-pane fade">
                    <Carousel />
                </div>
                <div id="partner-stories" class="collapse text-center tab-pane fade">
                    <Stories />
                </div>
            </div>
            <div class="container">
                <button type="button" class="btn btn-maroon" >View All</button>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from './PartnersCarousel.vue';
import Stories from './PartnerStories.vue';
export default {
  components:{
    Carousel,
    Stories,
   }
}
</script>

<style>
    .partner-container {
        height: 1200px;
    }
    
    .custom-nav-pills .nav-link, 
    .custom-nav-pills .nav-link:hover .nav-link{
    background-color: #FFFFFF;   
    border: 1px solid;
    border-radius: 10px;
    color: #A70C0C;  
            &:hover {
            background-color: #A70C0C;   
            border-color: #FFFFFF;  
            color: #FFFFFF;  
        }

    }

    .custom-nav-pills .nav-link.active, 
    .custom-nav-pills .nav-link:hover .nav-link{
    background-color: #A70C0C;   
    color: #FFFFFF;  
    border: 1px solid;
    border-radius: 10px;
    }
</style>