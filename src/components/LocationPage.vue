<template>
  <br >
  <section  class="mt-5" style="background-color: #e9ecef;">
    <header class="text-white text-center py-3 " style="background-image: linear-gradient(to bottom, #d93c3c, #6e0a0a">
      <div class="container">
        <h1 class="display-4 fw-bold">Discover Our Locations</h1>
        <p class="lead">Explore our branches around the Philippines</p>
      </div>
    </header>
    <main>
      <section class="location-select mt-2"  >
        <div class="container" >
          <br id="location-view">
          <br>
          <br>
          <h2  class="section-title text-center mb-4" >Select a Location:</h2>
          <select id="locationSelect" v-model="selectedLocation" class="location-dropdown form-select mx-auto">
            <option value="location1">Apollo Makati</option>
            <option value="location2">Apollo CDO</option>
            <option value="location3">Apollo Davao</option>
          </select>
        </div>
      </section>
      <section class="location-details">
        <div class="container">
          <div class="location-info">
            <h2 class="location-title text-center">{{ getLocationTitle(selectedLocation) }}</h2>
            <div class="location-description" v-html="getLocationDescription(selectedLocation)"></div>
          </div>
          <div class="location-map mt-4">
            <iframe
              :src="getMapUrl(selectedLocation)"
              width="100%"
              height="350"
              frameborder="0"
              style="border: 0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>

  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedLocation: 'location1', //set Apollo as default
    };
  },
  methods: {
    getMapUrl(location) {
      const mapUrls = {
        location1: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.3442591679888!2d121.01525351435878!3d14.57009648531642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9a3e5771821%3A0x4931654db6bf52e8!2s4120%20Kalayaan%20Ave%2C%20Makati%2C%201205%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1693878856967!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
        location2: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.2353716054863!2d124.65807861082757!3d8.47647929735726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2c8f51bc73b%3A0x5b606450d7735ec5!2sJuan%20Fuel%20Building%2C%20J.R.%20Borja%20Ext%2C%20Barangay%20Camaman-an%2C%20Cagayan%20de%20Oro%2C%209000%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1693878667762!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
        location3: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d989.8343167441411!2d125.61463799999999!3d7.086845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96da8cef3ff0d%3A0x313b692c163acb1d!2sKuilans!5e0!3m2!1sen!2sus!4v1693879561050!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
      };
      return mapUrls[location];
    },
    getLocationTitle(location) {
      const titles = {
        location1: 'Apollo Makati',
        location2: 'Apollo CDO',
        location3: 'Apollo Davao',
      };
      return titles[location];
    },
    getLocationDescription(location) {
      const descriptions = {
        location1: `
                    Apollo Center, 4120 Kalayaan Ave,
                    Makati City 1205, Chino Roces-Kalayaan intersection 
                    <br>
                    HR: +6324399765
                    Accounting: +6324399756
                    Support: +6324399763
                    +6324399764
                    +639178181741
                    +639228983517
                    +639184037878</p>
                  `,
        location2: `Door 7,
                      2nd floor Juan Fuel Building (ECOOIL Gasoline station),
                      Jr Borja Extension, Camaman-an,
                      Cagayan de Oro, Philippines`,
        location3: `36 Lacson St, 
                      Barangay Barrio Obrero, 
                      Davao City, 
                      8000 Davao del Sur, Philippines`,
      };
      return descriptions[location];
    },
  },
};
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2rem;
}

.location-dropdown {
  width: 100%;
  max-width: 400px;
  font-size: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
  display: block;
}

.location-details {
  padding: 40px 0;
}

.location-info {
  background-color: white;
  padding: 20px;
  border: 4px solid #ccc;
  border-radius: 10px;
}

.location-title {
  text-align: center;
  font-size: 2rem;
  color: #d93c3c;
}

.location-description {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
}

.location-map {
  background-color: white;
  padding: 20px;
  border: 4px solid #ccc;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
