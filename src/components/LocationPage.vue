<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-maroon fw-bold mt-5" style="height: 80px;">
        <div class="d-flex justify-content-center align-items-center flex-grow-1">
          <h1 class="text-center fw-bold" style="color: white;">EXPLORE OUR LOCATIONS</h1>
        </div>
      </nav>
      <div class="container mt-5">
    <div class="location-page">
     
  
      <!-- this is for the dropdown menu -->
      <div class="text-center">
        <label for="locationSelect">Select a Location:</label>
        <select id="locationSelect" v-model="selectedLocation" class="form-control fixed-dropdown mx-auto">
          <option value="location1">Apollo Makati</option>
          <option value="location2">Apollo CDO</option>
          <option value="location3">Apollo Davao</option>
        </select>
      </div>
  
      <!-- Container for location details/information -->
      <div class="row location-container">
        <!-- place it at left column for location details/information -->
        <div class="col-md-6 location-info">
          <div v-if="selectedLocation === 'location1'">
            <h2 class="title">Apollo Makati</h2>
            <p class="location-details">
              Apollo Center, 4120 Kalayaan Ave,<br>
              Makati City 1205,
              Chino Roces-Kalayaan intersection<br>
              HR: +6324399765<br>
              Accounting: +6324399756<br>
              Support: +6324399763<br>
              +6324399764<br>
              +639178181741<br>
              +639228983517<br>
              +639184037878<br>
            </p>
          </div>
          <div v-if="selectedLocation === 'location2'">
            <h2 class="title">Apollo CDO</h2>
            <p class="location-details smaller-text">
              Door 7,<br>
              2nd floor Juan Fuel Building <br>(ECOOIL Gasoline station),<br>
              Jr Borja Extension, Camaman-an,<br>
              Cagayan de Oro, Philippines
            </p>
          </div>
          <div v-if="selectedLocation === 'location3'">
            <h2 class="title">Apollo Davao</h2>
            <p class="location-details smaller-text">
              36 Lacson St, <br>
              Barangay Barrio Obrero, <br>
              Davao City, <br>
              8000 Davao del Sur, Philippines 
            </p>
          </div>
        </div>
  
        <!-- Right column for the embedded Google Maps location -->
        <div class="col-md-6 location-map">
          <iframe
            class="location-map-container"
            :src="getMapUrl(selectedLocation)"
            width="100%"
            height="350"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
 
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        selectedLocation: 'location1', // set Apollo Makati as default location
      };
    },
    methods: {
      getMapUrl(location) {
        // Return different Google Maps URLs based on the selected location
        if (location === 'location1') {
          return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.3442591679888!2d121.01525351435878!3d14.57009648531642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9a3e5771821%3A0x4931654db6bf52e8!2s4120%20Kalayaan%20Ave%2C%20Makati%2C%201205%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1693878856967!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">';
        } else if (location === 'location2') {
          return '    https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.2353716054863!2d124.65807861082757!3d8.47647929735726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2c8f51bc73b%3A0x5b606450d7735ec5!2sJuan%20Fuel%20Building%2C%20J.R.%20Borja%20Ext%2C%20Barangay%20Camaman-an%2C%20Cagayan%20de%20Oro%2C%209000%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1693878667762!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">';
        } else if (location === 'location3') {
          return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d989.8343167441411!2d125.61463799999999!3d7.086845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96da8cef3ff0d%3A0x313b692c163acb1d!2sKuilans!5e0!3m2!1sen!2sus!4v1693879561050!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">';
        }
    
      },
    },
  };
  </script>
  
  <style scoped>
  
 
  
  
  .location-page {
    margin-top: 100px;
    background-color: #e0e0e0;
    max-width: 80%;
    margin: 0 auto;
    padding: 20px; 
    
  }
  
  .fixed-dropdown {
    width: 100%;
    max-width: 400px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    height: auto;
    
  }
  
  .location-container {
    margin-top: 20px;
  }
  
  .location-info {
    padding: 10px;
    border: 4px solid #ccc;
    border-radius: 10px;
    border-right: none;
    background-color: white;
  }
  .location-details {
    font-size: 14px;
    font-size: 1.2rem;
  }
  
  .location-map {
    padding: 10px;
    border: 4px solid #ccc;
    border-radius: 10px;
    background-color: white;
  }
  
  @media screen and (max-width: 800px){
    .location-title {
      font-size: 30px;
    }
  }
  </style>