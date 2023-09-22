<template>
  <br id="about-view">
  <br>
  <nav class="navbar navbar-expand-lg bg-maroon " style="background-image: linear-gradient(to bottom, #d93c3c, #6e0a0a);">
    <div class="container-fluid text-center">
      <div class="d-flex justify-content-center align-items-center mx-auto">
        <div class="btn-group" role="group">
          <div class="d-flex flex-wrap justify-content-center">
            <button v-for="(tab) in tabs" :key="tab" class="btn btn-outline-light btn-lg btn-xxl m-2"
              :class="{ active: currentTab === tab }" @click="showTab(tab)">
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
        <!-- List 1 as a Bulleted List with Bootstrap Margin Class -->
        <ul class="ms-5"> <!-- Use ms-4 for left margin (adjust as needed) -->
          <li style="font-size: 1.3rem" v-for="item in aboutContent.list1" :key="item">{{ item }}</li>
        </ul>
        <p class="mt-4" style="font-size: 1.3rem">{{ aboutContent.p2 }}</p>
        <!-- List 2 as a Bulleted List with Bootstrap Margin Class -->
        <ul class="ms-5"> <!-- Use ms-4 for left margin (adjust as needed) -->
          <li style="font-size: 1.3rem" v-for="item in aboutContent.list2" :key="item">{{ item }}</li>
        </ul>
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
        <p style="font-size: 1.3rem; text-align: justify">{{ historyContent.historyText }}</p>

        <img :src="require(`@/assets/about/${historyContent.image}.png`)" class="history-header-image"
          alt="History Header" />
      </div>
    </div>
  </div>

<!-- Purpose Tab -->
<div v-else-if="currentTab === 'Purpose'" class="container">
  <!-- Purpose Content -->
  <h1 class="text-center text-dark fw-bold mt-5">{{ purposeContent.title }}</h1>
  <hr class="divider" />
  <h2 class="text-maroon text-center">Vision</h2>
  <div style="font-size: 1.25rem; text-align: center" class="col">
    {{ purposeContent.vision }}
  </div>
  <div class="row justify-content-center">
    <div class="col-md-6 d-flex align-items-stretch">
      <!-- Mission Container -->
      <div class="border border-grayish rounded p-3 mb-3 mt-5">
        <h2 class="text-maroon text-center">Mission</h2>
        <ul style="list-style-type: disc; margin-left: 20px;"> <!-- Added spacing with margin-left -->
          <li v-for="missionItem in purposeContent.mission" :key="missionItem">
            <div style="font-size: 1.3rem; text-align: justify">
              {{ missionItem }}
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="col-md-6 d-flex align-items-stretch">
      <!-- Values Container -->
      <div class="border border-grayish rounded p-3 mb-3 mt-5">
        <h2 class="text-maroon text-center">Values</h2>
        <ul style="list-style-type: disc; margin-left: 20px;"> <!-- Added spacing with margin-left -->
          <li v-for="valueItem in purposeContent.values" :key="valueItem">
            <div style="font-size: 1.3rem; text-align: justify">
              {{ valueItem }}
            </div>
          </li>
        </ul>
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