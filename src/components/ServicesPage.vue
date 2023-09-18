<template>

  <section id="services-view" class="mt-5 py-5" style="background-color: #e9ecef;">
    <div class="container">
      <h1 class="text-center text-dark fw-bold mb-4">DISCOVER OUR SERVICES</h1>
      <hr class="border-secondary border-2 border-dark">
      <div class="row mt-5">
        <div class="col-md-6" v-for="(service, index) in services" :key="index">
          <div class="service-item-wrapper mb-4">
            <div class="service-item bg-white rounded p-4">
              <div class="text-center">
                <img :src="getImagePath(service.image)" :alt="'Service ' + (index + 1)" class="service-image img-fluid rounded" />
              </div>
              <h3 class="text-center mt-4 fw-bold text-maroon">{{ service.title }}</h3>
              <hr class="border-2 border-dark " style="width: 30%; margin: 0 auto;">
              <p class="service-details text-center text-dark mt-4 text-secondary fs-5">{{ service.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>


<script>
import servicesData from '@/assets/data/services.json'; 

export default {
  name: 'ServicesPage',
  data() {
    return {
      services: servicesData, 
    };
  },
  methods: {
    getImagePath(imageFileName) {
      return require(`@/assets/services/${imageFileName}.png`);
    },
  },
};
</script>
<style scoped>

.service-item {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3); /* Adjust the values here */
}

</style>