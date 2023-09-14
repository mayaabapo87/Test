<template>
<PartnersPopup />
<ContactForm />
<CareerDetailsPopup />
<ResumePopup />
<CareerPopup />
<StoriesPopup />
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
 
import ContactForm from './components/popups/ContactPopup.vue'
import CareerDetailsPopup from './components/popups/CareerDetailsPopup.vue';
import CareerPopup from './components/popups/CareerPopup.vue';
import ResumePopup from './components/popups/ResumePopup.vue'
import PartnersPopup from './components/popups/PartnersPopup.vue'
import StoriesPopup from './components/popups/StoriesPopup.vue'

export default {
  components:{
    Navbar,
    Landing,
    Partners,
    ContactForm,
    CareerDetailsPopup,
    Careers,
    CareerPopup,
    ResumePopup,
    PartnersPopup,
    StoriesPopup,
  },
  data () {
    return { 

    }
  },
}

</script>

<style>
 

</style>
