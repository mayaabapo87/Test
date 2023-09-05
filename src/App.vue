<template>
  <CareerDetails />
  <ContactForm />
  <nav>
      <Navbar />
      <Landing />
      <Partners />
      <Careers />
   </nav>
  <router-view/>
</template>

<script>
import Navbar from './components/NavBar.vue'
import Landing from './components/LandingPage.vue'
import Partners from './components/PartnersPage.vue'
import Careers from './components/CareersPage.vue'

import CareerDetails from './components/popups/CareerDetailsPopup.vue'
import ContactForm from './components/popups/ContactPopup.vue'

export default {
  components:{
    Navbar,
    Landing,
    Partners,
    Careers,
    CareerDetails,
    ContactForm,
  },
  data () {
    return { 

    }
  },
}

</script>

<style>
 

</style>
