<template>
    <div class="container-fluid">
        <br id="landing-view">

        <!--Desktop-->
        <div class="container d-none d-xl-block">
            <div id="carouselLanding" class="carousel  carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner" style="width:100%;">
                    <div class="carousel-item active text-center">
                        <hr class="m-0 p-0 border-secondary border-2 border-dark">
                        <div class="row">
                            <div class="col p-5 pe-0">
                                <h1 class="text-maroon mt-5 fw-bold">COME WORK WITH US</h1>
                                <h2 class="text-maroon">We provide simple solutions to complex problems</h2>
                                <p class="px-5 fs-5 text-dark">Apollo Technologies is an Information and Communication 
                                    Technology Services organisation that leads a group of companies engaged in the delivery of 
                                    Software Services, IT and Network Infrastructure, and Services.
                                </p>
                            </div>
                            <div class="col">
                                <svg class=" " width="450" height="450" xmlns="http://www.w3.org/2000/svg">
                                    <image href="../assets/icons/apollo.svg" x="0" y="0" width="450" height="450" />
                                </svg>
                            </div>
                        </div>
                        <hr class="m-0 p-0 border-secondary border-2 border-dark">
                    </div>
                    <div class="carousel-item text-center">
                        <hr class="m-0 p-0 border-secondary border-2 border-dark">
                        <div class="row">
                            <div class="col p-5 pe-0">
                                <h1 class="text-maroon mt-5 fw-bold">INQUIRE NOW!</h1>
                                <h2 class="text-maroon">Send us an email</h2>
                                <p class="px-5 fs-5 text-dark">Ask us questions for more information.</p>
                                <button class="btn btn-outline-maroon"  data-bs-toggle="modal" data-bs-target="#contactForm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="col">
                                <svg class=" " width="450" height="450" xmlns="http://www.w3.org/2000/svg">
                                    <image href="../assets/icons/email.svg" x="0" y="0" width="450" height="450" />
                                </svg>
                            </div>
                        </div>
                        <hr class="m-0 p-0 border-secondary border-2 border-dark">
                    </div>
                    <div class="carousel-item text-center">
                        <hr class="m-0 p-0 border-secondary border-2 border-dark">
                        <div class="row">
                            <div class="col p-5 pe-0">
                                <h1 class="text-maroon mt-5 fw-bold">JOIN US!</h1>
                                <h2 class="text-maroon">We are looking for hires</h2>
                                <p class="px-5 fs-5 text-dark">Find a career that suits you.</p>
                                <a class="btn btn-outline-maroon" href="#careers-view">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                        <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                    </svg>
                                </a>
                            </div>
                            
                            <div class="col">
                                <svg class=" " width="450" height="450" xmlns="http://www.w3.org/2000/svg">
                                    <image href="../assets/icons/join.svg" x="0" y="0" width="450" height="450" />
                                </svg>
                            </div>
                        </div>
                        <hr class="m-0 p-0 border-secondary border-2 border-dark">
                    </div>

                </div>

            <!--Left Arrow-->
            <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselLanding" data-bs-slide="prev"
                style="width: 40px; height: 50px;">
                <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true"
                    style="width: 50px; height: 50px;"></span>
            </button>
            <!--Right Arrow-->
            <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselLanding" data-bs-slide="next"
                style="width: 40px; height: 50px;">
                <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true"
                    style="width: 50px; height: 50px;"></span>
            </button>
            <!--Carousel Bars-->
            <div class="carousel-indicators mx-auto" style="max-width: 300px;">
                <button type="button" data-bs-target="#carouselLanding" data-bs-slide-to="0" 
                    class="active border border-maroon mx-1 rounded bg-maroon" aria-current="true" aria-label="Slide 1"
                    style="width: 60px; height: 5px; "></button>

                <button type="button" data-bs-target="#carouselLanding" data-bs-slide-to="1" 
                    class="border border-maroon mx-1 rounded bg-maroon" aria-label="Slide 2"
                    style="width: 60px; height: 5px;"></button>

                <button type="button" data-bs-target="#carouselLanding" data-bs-slide-to="2" 
                    class="border border-maroon mx-1 rounded bg-maroon" aria-label="Slide 3"
                    style="width: 60px; height: 5px;"></button>
            </div>



            </div>
        </div>

        <!--Tablet-->
        <div class="d-none d-sm-block d-xl-none d-xxl-none mt-5">
            <hr class="my-3 border-secondary border-1">
            <div id="carouselLanding-tablet" class="carousel  carousel-fade " data-bs-ride="carousel">
                <div class="carousel-inner" style="width:100%; height: 330px;">

                        <div class="carousel-item active text-center p-3">
                            <h1 class="text-maroon fw-bold">COME WORK WITH US</h1>
                            <h2 class="text-maroon">We provide simple solutions to complex problems</h2>
                            <p class="px-3 fs-5 text-dark">Apollo Technologies is an Information and Communication 
                                Technology Services organisation that leads a group of companies engaged in the delivery of 
                                Software Services, IT and Network Infrastructure, and Services.
                            </p>
                        </div>
                        <div class="carousel-item text-center p-3">
                            <h1 class="text-maroon  fw-bold">INQUIRE NOW!</h1>
                            <h2 class="text-maroon">Send us an email</h2>
                            <p class="px-5 fs-5 text-dark">Ask us questions for more information.</p>
                                <button class="btn btn-outline-maroon"  data-bs-toggle="modal" data-bs-target="#contactForm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                    </svg>
                                </button>
                        </div>
                        <div class="carousel-item text-center p-3">
                            <h1 class="text-maroon fw-bold">JOIN US!</h1>
                            <h2 class="text-maroon">We are looking for hires</h2>
                            <p class="px-5 fs-5 text-dark">Find a career that suits you.</p>
                            <a class="btn btn-outline-maroon" href="#careers-view">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                </svg>
                            </a>
                        </div>

                </div>

            <!--Carousel Bars-->
            <div class="carousel-indicators mx-auto mt-5" style="max-width: 300px;">
                <button type="button" data-bs-target="#carouselLanding-tablet" data-bs-slide-to="0" 
                    class="active border border-maroon mx-1 rounded bg-maroon" aria-current="true" aria-label="Slide 1"
                    style="width: 60px; height: 5px; "></button>

                <button type="button" data-bs-target="#carouselLanding-tablet" data-bs-slide-to="1" 
                    class="border border-maroon mx-1 rounded bg-maroon" aria-label="Slide 2"
                    style="width: 60px; height: 5px;"></button>

                <button type="button" data-bs-target="#carouselLanding-tablet" data-bs-slide-to="2" 
                    class="border border-maroon mx-1 rounded bg-maroon" aria-label="Slide 3"
                    style="width: 60px; height: 5px;"></button>
            </div>



            </div>
            <hr class="my-3 border-secondary border-1">

        </div>

        <!--Mobile-->
        <div class="container d-block d-sm-none mt-5">
            <hr class="my-3 border-secondary border-1">
            <h1 class="text-maroon fw-bold">COME WORK WITH US</h1>
            <h3 class="text-maroon">
                We provide simple solutions to complex problems
            </h3>
            <p class="text-dark">
                Apollo Technologies is an Information and Communication Technology Servicesorganisation 
                that leads a group of companies engaged in the delivery of Software Services, IT and Network Infrastructure, and Services.
            </p>
            <hr class="my-3 border-secondary border-1">

            <div class="d-flex">
                <div class="row flex-fill">
                    <div class="col my-3">      
                        <div class="card border-secondary h-100 w-100">
                            <div class="card-body">
                                <h5 class="card-title">Need Questions?</h5>
                                <p class="card-text">Send us an email.</p>
                                <button class="btn btn-maroon
                                position-absolute top-100 start-50 translate-middle" data-bs-toggle="modal" data-bs-target="#contactForm">INQUIRE</button>
                            </div>
                        </div>
                    </div>
                    <div class="col my-3">
                        <div class="card border border-secondary h-100 w-100">
                            <div class="card-body">
                                <h5 class="card-title">Looking for Work?</h5>
                                <p class="card-text">We have several job offerings.</p>
                                <a class="btn btn-maroon
                                position-absolute top-100 start-50 translate-middle" href="#careers-view">JOIN</a>
                            </div>
                        </div>
                    </div>                             
                </div>                       
            </div>
        </div>
     </div>
</template>
     
<style scoped>
/* xl screens */
 @media (min-width: 1200px) {
    .carousel-inner {
      height: 500px; 
      margin-bottom: 65px;
      margin-top: 60px;
    }
}
/* xxl screens*/
@media (min-width: 1400px) {
    .carousel-inner {
      height: 500px; 
      margin-bottom: 100px;
      margin-top: 100px;

    }
}
</style>