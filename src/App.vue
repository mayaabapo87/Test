<template>
  <nav>
      <Navbar />
      <Landing />
     
  </nav>
  <router-view/>
</template>

<script>
import Landing from './components/LandingView.vue'
import Navbar from './components/NavbarView.vue'
export default {
  components:{
    Navbar,
    Landing,
  }
}
</script>

<style>


 
</style>
