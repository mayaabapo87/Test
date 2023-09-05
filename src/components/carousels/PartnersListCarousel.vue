<template>
    <div id="carouselPartners" class="carousel mt-2 carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner" style="width:100%;">
            <div class="carousel-item active text-center">
                <svg class=" " width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <image href="../../assets/logos/711.svg" x="0" y="0" width="300" height="300" />
                </svg>
                <h2 class="text-maroon">Philippine Seven Corporation</h2>
                <p class="px-5 fs-5 text-dark">The largest convenience store chain in the Philippines.
                </p>
            </div>
            <div class="carousel-item text-center">
                <svg class=" " width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <image href="../../assets/logos/CDEC.svg" x="0" y="0" width="300" height="300" />
                </svg>
                <h2 class="text-maroon">Cargo Data Exchange Center, Inc.</h2>
                <p class="px-5 fs-5 text-dark">Innovates and explores information technology to capture and maintain the e-business 
                    market in the Philippines and to provide new services in the e-Commerce sector.
                </p>
            </div>
            <div class="carousel-item text-center">
                <svg class=" " width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <image href="../../assets/logos/MFI.svg" x="0" y="0" width="300" height="300" />
                </svg>
                <h2 class="text-maroon">First MFI Network</h2>
                <p class="px-5 fs-5 text-dark">It aims to create systems and tools to make microfinance processes more efficient and 
                    convenient through the use of social networks, the Internet, retail outlets, 
                    electronic wallets, and mobile technology.
                </p>
            </div>
            <div class="carousel-item text-center">
                <svg class=" " width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <image href="../../assets/logos/PIPOL.svg" x="0" y="0" width="300" height="300" />
                </svg>
                <h2 class="text-maroon">Pipol Konek</h2>
                <p class="px-5 fs-5 text-dark">The Philippine government has an ambitious program to provide free public Wi-Fi to all citizens in all 
                    public places in the country underpinned by legislation that passed in 2017 
                    that mandates the governments Department of Information and Communications (DICT) to implement the 
                    Free Public Internet Access Program.
                </p>
            </div>
        </div>
        <!--Left Arrow-->
        <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselPartners" data-bs-slide="prev"
        style="width: 40px; height: 50px;">
        <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true"
            style="width: 50px; height: 50px;"></span>
        </button>
        <!--Right Arrow-->
        <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselPartners" data-bs-slide="next"
        style="width: 40px; height: 50px;">
        <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true"
            style="width: 50px; height: 50px;"></span>
        </button>
        <PartnersPopup />
    </div>
</template>

<script>
import PartnersPopup from '../popups/PartnersPopup.vue'
export default {
  components:{
    PartnersPopup,
   }
}
</script>


<style scoped>
/* xl screens */
@media (min-width: 1200px) {
    .carousel-inner {
      height: 440px; 
    }
}
/* xxl screens*/
@media (min-width: 1400px) {
    .carousel-inner {
      height: 440px; 
    }
}
</style>