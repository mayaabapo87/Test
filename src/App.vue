<template>
  <nav>
      <Navbar />
      <Landing />
      <Partners />
     
  </nav>
  <router-view/>
</template>

<script>
import Landing from './components/LandingView.vue'
import Navbar from './components/NavbarView.vue'
import Partners from './components/PartnersView.vue';
export default {
  components:{
    Navbar,
    Landing,
    Partners,
  }
}
</script>

<style>


 
</style>
