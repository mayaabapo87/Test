<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-maroon fw-bold mt-5" style="height: 80px;">
    <div class="d-flex justify-content-center align-items-center flex-grow-1">
      <h1 class="text-center fw-bold" style="color: white;">DISCOVER OUR SERVICES</h1>
    </div>
  </nav>
  <div class="container mt-5">
    <div class="row">
      <div v-for="(service, index) in services" :key="index" class="col-md-6">
        <div class="service-item border border-secondary rounded p-4 mb-4"
          style="background-color: #ccc; display: flex; flex-direction: column; align-items: center; text-align: center; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);">
          <!-- Use the computed property for image source -->
          <img :src="getImagePath(service.image)" :alt="'Service ' + (index + 1)" class="service-image img-fluid rounded"
            style="max-width: 100%; height: auto; border-radius: 5px;" />

          <h3 class="service-title mt-3" style="font-size: 24px; color: black; font-weight: bold;">{{ service.title }}
          </h3>
          <p class="service-details" style="font-size: 1.4rem; margin-top: 10px; color: black;">{{ service.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import servicesData from '@/assets/data/services.json'; // Import the JSON data

export default {
  name: 'ServicesPage',
  data() {
    return {
      services: servicesData, // Use the imported data
    };
  },
  methods: {
    getImagePath(imageFileName) {
      // Assuming image files are in '@/assets/services/' directory with '.png' extension
      return require(`@/assets/services/${imageFileName}.png`);
    },
  },
};
</script>
