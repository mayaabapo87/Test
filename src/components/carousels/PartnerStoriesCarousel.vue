<template>
    <div id="carouselStories" class="carousel mt-2 carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner" style="width:100%;">
            <div class="carousel-item active text-center">
                 <p class="px-5 fs-5 text-dark">
                    At its founding in 2002, Apollo Technologies Inc. set out to exploit the use of open global standards, 
                    open-source technologies, and the extensive use of Internet technology to build innovative Information 
                    and Communication Technology (ICT) solutions. It aligned the seismic technological changes at that time 
                    (the Web browser, Internet technologies, the emergence of open-source software) with its vision of 
                    empowering change in the emerging market through creation of innovative Information and Communication 
                    Technology solutions. 
                </p>
            </div>
            <div class="carousel-item text-center">
                <p class="px-5 fs-5 text-dark">
                    The company believed that by adopting open standards rather than proprietary standards and sticking to 
                    global standards and open-source software, it would facilitate the transformative power of ICT to aid Philippine 
                    entities compete in the global space. It focused its efforts on creating innovative technologies suited for the emerging 
                    market where IT infrastructure is weak or non-existent, IT budgets are limited, and IT skills within organizations 
                    are scarce.
                </p>
            </div>
            <div class="carousel-item text-center">
                <p class="px-5 fs-5 text-dark">
                    The use of open standards and open-source software allowed the company to offer its solution as a low-cost 
                    “software as a service” way back in 2002 when it wasnt a buzzword yet. The world was still on licensed software 
                    and locked in vendor-based proprietary technologies. By building a strong engineering culture, the company built 
                    solutions for both large and small companies. It offered a “subscription type, pay-per-use” model allowing easy 
                    adoption by its targeted clients with a low-cost usage model. The trailblazing effort paved the way to a business
                    model that enables the company to partner with companies /Government institutions and offer its software technology
                    andengineering expertise to build innovative ICT solutions geared for the emerging market.
                </p>
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
        <StoriesPopup />
    </div>
</template>

<script>
import StoriesPopup from '../popups/StoriesPopup.vue'
export default {
  components:{
    StoriesPopup,
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