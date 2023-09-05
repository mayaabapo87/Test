<template>
 
    <br  id="careers-view">  
  
    <div class="container-fluid my-1">
        <!--Desktop-->
        <div class="container d-none d-xl-block text-center">
            <h1 class="text-center text-dark fw-bold mt-5">CAREERS</h1>
            <hr class="border-secondary border-2 border-dark">
                <div class="container d-none d-xl-block">
                    <div id="carouselCareers" class="carousel  carousel-fade ">
                         <div class="carousel-inner" style="width:100%;">
                            <div class="carousel-item active text-center">  
                                <div class="d-flex justify-content-evenly my-5">
                                    <div class="card border-maroon border-2" style="width: 18rem;">
                                        <img  width="200" height="200" src="../assets/icons/join.svg" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Service Delivery Manager</h5>
                                            <p class="card-text">Makati</p>
                                        </div>
                                        <div class="container mb-4">
                                            <button @click="$emit('careerDetails', careerID)" class="btn btn-outline-maroon" 
                                            data-bs-target="#career-details" data-bs-toggle="modal"> Details </button>
                                        </div>
                                    </div>
                                    <div class="card border-maroon border-2" style="width: 18rem;">
                                        <img  width="200" height="200" src="../assets/icons/join.svg" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Mid-Level Software Developer</h5>
                                            <p class="card-text">Makati, CDO</p>
                                         </div>
                                         <div class="container mb-4">
                                            <button class="btn btn-outline-maroon" data-bs-target="#career-details" data-bs-toggle="modal"> Details </button>
                                         </div>
                                    </div>  
                                    <div class="card border-maroon border-2" style="width: 18rem;">
                                        <img  width="200" height="200" src="../assets/icons/join.svg" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Service Delivery Manager</h5>
                                            <p class="card-text">Makati</p>
                                        </div>
                                        <div class="container mb-4">
                                            <button class="btn btn-outline-maroon" data-bs-target="#career-details" data-bs-toggle="modal"> Details </button>
                                        </div>
                                    </div>        
                                </div>                      
                            </div>
                            <div class="carousel-item text-center my-5">
                                <div class="d-flex justify-content-evenly">
                                    <div class="card border-maroon border-2" style="width: 18rem;">
                                        <img width="200" height="200" src="../assets/icons/join.svg" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Product Specialist</h5>
                                            <p class="card-text">Makati</p>
                                        </div>
                                        <div class="container mb-4">
                                            <button class="btn btn-outline-maroon" data-bs-target="#career-details" data-bs-toggle="modal"> Details </button>
                                        </div>
                                    </div> 
                                </div> 
                            </div>                           
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
                <CareerPopup />
            <hr class="border-secondary border-2 border-dark">
        </div>

        <!--Tablet-->
        <div class="container d-none d-sm-block d-xl-none d-xxl-none">
        </div>

        <!--Mobile-->
        <div class="container d-inline d-block d-sm-none">
        </div>
    </div>
</template>

<script setup>
 
</script>

<style>
 /* xl screens */
 @media (min-width: 1200px) {
    .carousel-inner {
      height: 440px; 
    }
}
/* xxl screens*/
@media (min-width: 1400px) {
    .carousel-inner {
      height: 500px; 
    }
}
 

</style>