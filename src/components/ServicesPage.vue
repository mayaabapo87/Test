<template>
  <section id="services-view" class="mt-5 py-5" style="background-color: #a8a8a8;">
    <div class="container">
      <h1 class="text-center text-white fw-bold mt-4">OUR SERVICES</h1>
      <hr class="border-secondary border-2 border-dark">
      <div class="row mt-5">
        <div class="col-md-6" v-for="(service, index) in servicesData" :key="index">
          <div class="service-item-wrapper d-flex flex-column h-100 ">
            <div class="service-item bg-white rounded p-4 mt-4">
              <div class="text-center">
                <img :src="getImagePath(service.image)" :alt="'Service ' + (index + 1)" class="service-image img-fluid rounded" />
              </div>
              <h3 class="text-center mt-4 fw-bold text-maroon" v-html="service.title"></h3>
              <hr class="border-2 border-dark" style="width: 30%; margin: 0 auto;">
              <br>
              <p class="service-details text-center text-dark text-secondary fs-5 flex-grow-1 overflow-auto" v-html="service.details"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      servicesData: [],
    };
  },
  created() {
    this.fetchServicesData();
  },
  methods: {
    async fetchServicesData() {
      try {
        const response = await fetch('http://localhost:3000/services');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.servicesData = await response.json();
        console.log(this.servicesData);
      } catch (error) {
        console.error('Error fetching services data', error);
      }
    },
    getImagePath(imageFileName) {
      return require(`@/assets/services/${imageFileName}.png`);
    },
  },
};
</script>

<style scoped>

.service-item {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3); 
  height: 100%;
}
</style>