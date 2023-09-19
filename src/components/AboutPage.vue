<template>

  <br id="about-view">
  <br>
    <nav class="navbar navbar-expand-lg bg-maroon " style="background-image: linear-gradient(to bottom, #d93c3c, #6e0a0a);">
      <div class="container-fluid text-center">
        <div class="d-flex justify-content-center align-items-center mx-auto">
          <div class="btn-group" role="group">
            <div class="d-flex flex-wrap justify-content-center">
              <button
                v-for="(tab) in tabs"
                :key="tab"
                class="btn btn-outline-light btn-lg btn-xxl m-2"
                :class="{ active: currentTab === tab }"
                @click="showTab(tab)"
              >
                {{ tab }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- About Tab -->
    <div v-if="currentTab === 'About'" class="container">
      <!-- About Content -->
      <h1 class="text-center text-dark fw-bold mt-5">{{ aboutContent.title }}</h1>
      <hr class="divider" />
      <div class="col-md-9 mx-auto">
        <br />
        <div class="row justify-content-center">
          <p style="font-size: 1.3rem">{{ aboutContent.p1 }}</p>
          <!-- Loop 1  -->
          <div v-for="section in aboutContent.section1" :key="section.description" class="row mb-2 align-items-center">
            <div class="col-auto ">
              <img :src="require(`@/assets/about/${section.image}.png`)" class="about-placeholder" style="max-width: 25px; max-height: 15px;  " />
            </div>
            <div style="font-size: 1.3rem" class="col">
              {{ section.description }}
            </div>
          </div>
          <p class="mt-4" style="font-size: 1.3rem">{{ aboutContent.p2 }}</p>
          <!-- Loop 2-->
          <div v-for="section in aboutContent.section2" :key="section.description" class="row mb-2 align-items-center">
            <div class="col-auto">
              <img :src="require(`@/assets/about/${section.image}.png`)" class="about-placeholder" style="max-width: 25px; max-height: 15px;" />
            </div>
            <div style="font-size: 1.3rem" class="col">
              {{ section.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- History Tab -->
    <div v-else-if="currentTab === 'History'" class="container">
      <!-- History Content -->
      <h1 class="text-center text-dark fw-bold mt-5">{{ historyContent.title }}</h1>
      <hr class="divider" />
      <div class="col-md-9 mx-auto">
        <br />
        <div class="row justify-content-center">
          <p style="font-size: 1.3rem; text-align: justify">{{ historyContent.historyText1 }}</p>
          <br>
          <p style="font-size: 1.3rem; text-align: justify">{{ historyContent.historyText2 }}</p>
          <br>
          <p style="font-size: 1.3rem; text-align: justify">{{ historyContent.historyText3 }}</p>
          
          <img :src="require(`@/assets/about/${historyContent.image}.png`)" class="history-header-image" alt="History Header" />
        </div>
      </div> 
    </div>

     <!-- Purpose Tab -->
    <div v-else-if="currentTab === 'Purpose'" class="container">
      <!-- Purpose Content -->
      <h1 class="text-center text-dark fw-bold mt-5">{{ purposeContent.title }}</h1>
      <hr class="divider" />
      <h2 class=" text-maroon text-center">Vision</h2>
      <div style="font-size: 1.25rem; text-align: center" class="col">
        {{ purposeContent.vision }}
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 d-flex align-items-stretch">
          <!-- Mission Container -->
          <div class="border border-grayish rounded p-3 mb-3 mt-5 ">
            <h2 class=" text-maroon text-center">Mission</h2>
            <div v-for="missionItem in purposeContent.mission" :key="missionItem.description" class="row mb-2 ">
              <div class="col-auto">
                <img :src="require(`@/assets/about/${missionItem.image}.png`)" class="about-placeholder" style="max-width: 25px; max-height: 15px;" alt="Mission Image" />
              </div>
              <div style="font-size: 1.3rem; text-align: justify" class="col">
                {{ missionItem.description }}
              </div>
            </div>
          </div>
        </div>
    
        <div class="col-md-6 d-flex align-items-stretch">
          <!-- Values Container -->
          <div class="border border-grayish rounded p-3 mb-3 mt-5">
            <h2 class=" text-maroon text-center">Values</h2>
            <div v-for="valueItem in purposeContent.values" :key="valueItem.description" class="row mb-2">
              <div class="col-auto">
                <img :src="require(`@/assets/about/${valueItem.image}.png`)" class="about-placeholder" style="max-width: 25px; max-height: 15px;" alt="Value Image" />
              </div>
              <div style="font-size: 1.3rem; text-align: justify" class="col">
                {{ valueItem.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
import aboutContent from '@/assets/data/about.json'; 
import historyContent from '@/assets/data/history.json'; 
import purposeContent from '@/assets/data/purpose.json'; 

export default {
  data() {
    return {
      tabs: ['About', 'History', 'Purpose'],
      currentTab: 'About',
      aboutContent: aboutContent,
      historyContent: historyContent,
      purposeContent: purposeContent,
    };
  },
  methods: {
    showTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>