<template>
  <nav>
      <Navbar />
      <Landing />
      <Partners />
      <Careers />
  </nav>
  <router-view/>
</template>

<script>
import Landing from './components/LandingView.vue'
import Partners from './components/PartnersView.vue';
import Navbar from './components/NavbarView.vue'
import Careers from './components/CareersView.vue'
export default {
  components:{
    Landing,
    Partners,
    Navbar,
    Careers,
  }
}
</script>

<style>
 
body::before {
  margin-top: 60px;

  content: "XS";
  color: black;
  font-size: 2rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  right: 0;
 }
 

@media (min-width: 576px) {
  body::before {
    content: "SM";
  }
}

@media (min-width: 768px) {
  body::before {
    content: "MD";
  }
}

@media (min-width: 992px) {
  body::before {
    content: "LG";
  }
}

@media (min-width: 1200px) {
  body::before {
    content: "XL";
  }
}

@media (min-width: 1400px) {
  body::before {
    content: "XXL";
  }
}

 
.work-f-size{
        font-size: 64px;
    }
    .work2-f-size{
        font-size: 48px;
    }
    .work3-f-size{
        font-size: 24px;
    }
    .maroon-a1{
        color: #A70C0C;
    }
    .maroon-b1{
        background-color: #A70C0C;
    }
    .maroon-a2{
        color: #A60C0C;
    }
    .white-a1{
        color: #FFFFFF;
    }
    .black-a1{
        color: #000000;
    }
    .grey-a1{
        color: #E9ECEF;
    }
    .grey-b1{
        background-color: #E9ECEF;
    }
    .grey-a2{
        color: #737573;
    }
    .grey-b2{
        background-color: #737573;
    }
</style>
