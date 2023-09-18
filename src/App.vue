<template>
<PartnersPopup />
<ProjectsPopup />
<ContactForm />
<CareerDetailsPopup />
<ResumePopup />
<CareerPopup />
<StoriesPopup />

  <nav>
    <Navbar />
    <Landing />
    <About />
    <Services/>
    <Partners />
    <Projects/>
    <Careers />
    <Location />
    <Footer/>
  </nav>
<router-view/>
</template>

<script>
import Navbar from './components/NavBar.vue'
import Landing from './components/LandingPage.vue'
import About from './components/AboutPage.vue'
import Services from './components/ServicesPage.vue'
import Partners from './components/PartnersPage.vue'
import Projects from './components/ProjectPage.vue'
import Careers from './components/CareersPage.vue'
import Location from './components/LocationPage.vue'
import Footer from './components/FooterPage.vue'

import ContactForm from './components/popups/ContactPopup.vue'
import CareerDetailsPopup from './components/popups/CareerDetailsPopup.vue';
import CareerPopup from './components/popups/CareerPopup.vue';
import ResumePopup from './components/popups/ResumePopup.vue'
import PartnersPopup from './components/popups/PartnersPopup.vue'
import ProjectsPopup from './components/popups/ProjectsPopup.vue'
import StoriesPopup from './components/popups/StoriesPopup.vue'



export default {
  components:{
    Navbar,
    Landing,
    About,
    Services,
    Partners,
    Projects,
    ContactForm,
    CareerDetailsPopup,
    Careers,
    Location,
    Footer,
    CareerPopup,
    ResumePopup,
    PartnersPopup,
    ProjectsPopup,

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
