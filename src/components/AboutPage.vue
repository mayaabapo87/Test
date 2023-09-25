<template>
  <section id="about-view">
    <nav class="navbar navbar-expand-lg navbar-dark " style="height: 70px; background-image: linear-gradient(to bottom, #d93c3c, #6e0a0a);">
      <div class="container-fluid text-center">
        <div class="d-flex justify-content-center align-items-center mx-auto">
          <ul class="navbar-nav d-flex justify-content-center align-items-center mx-auto">

            <li class="nav-item">
              <a :class="{ 'nav-link': true, 'active-button': currentTab === 'About' }" @click="showTab('About')">About
                Us</a>
            </li>
            <li class="nav-item">
              <a :class="{ 'nav-link': true, 'active-button': currentTab === 'History' }"
                @click="showTab('History')">History</a>
            </li>
            <li class="nav-item">
              <a :class="{ 'nav-link': true, 'active-button': currentTab === 'Purpose' }"
                @click="showTab('Purpose')">Purpose</a>
            </li>
          </ul>
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
          <div class="col-md-10"> 
            <p style="font-size: 1.3rem; text-align: justify">{{ aboutContent.p1 }}</p>
          </div>
       
          <div class="col-md-10"> 
            <ul class="ms-2"> 
              <li style="font-size: 1.3rem" v-for="item in aboutContent.list1" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="col-md-10">
            <p class="mt-4" style="font-size: 1.3rem ; text-align: justify">{{ aboutContent.p2 }}</p>
          </div>       
         <div class="col-md-10"> 
            <ul class="ms-2"> 
              <li style="font-size: 1.3rem" v-for="item in aboutContent.list2" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- History Tab -->
    <div v-else-if="currentTab === 'History'" class="container">
      <!-- History Content -->
      <h1 class="text-center text-dark fw-bold mt-5" v-html="historyContent.title"></h1>
      <hr class="divider" />
      <div class="col-md-9 mx-auto">
        <br />
        <div class="row justify-content-center">
          <p style="font-size: 1.3rem; text-align: justify" v-html="historyContent.historyText"></p>

          <img :src="require(`@/assets/about/${historyContent.image}.png`)" class="history-header-image"
            alt="History Header" />
        </div>
      </div>
    </div>

    <!-- Purpose Tab -->
    <div v-else-if="currentTab === 'Purpose'" class="container">
      <!-- Purpose Content -->
      <h1 class="text-center text-dark fw-bold mt-5" v-html="purposeContent.title"></h1>
      <hr class="divider" />
      <h2 class="text-maroon text-center">Vision</h2>
      <div style="font-size: 1.25rem; text-align: center" class="col" v-html="purposeContent.vision"></div>
      <div class="row justify-content-center">
        <div class="col-md-6 d-flex align-items-stretch">
          <!-- Mission Container -->
          <div class="border border-grayish rounded p-3 mb-3 mt-5">
            <h2 class="text-maroon text-center">Mission</h2>
            <ul style="list-style-type: disc; margin-left: 20px;"> <!-- Added spacing with margin-left -->
              <li v-for="missionItem in purposeContent.mission" :key="missionItem">
                <div style="font-size: 1.3rem; text-align: justify" v-html="missionItem"> 
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
                <div style="font-size: 1.3rem; text-align: justify" v-html="valueItem"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  

<script>
import aboutContent from '@/assets/data/about.json';
import purposeContent from '@/assets/data/purpose.json';
import historyContent from '@/assets/data/history.json';
export default {
  data() {
    return {
      tabs: ['About', 'Portfolio', 'Contact'],
      currentTab: 'About',
      aboutContent: aboutContent,
      historyContent: historyContent,
      purposeContent: purposeContent
    };
  },
  methods: {
    showTab(tab) {
      this.currentTab = tab;
    },

  },
};
</script>

<style scoped>
.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;

}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  font-size: 20px;
  margin-left: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-link:hover {
  color: #fff;
  transform: scale(1.1);
}

.active-button {
  color: #fff;
  border-bottom: 3px solid white;
  padding-bottom: 6px;
  text-transform: uppercase;
  font-weight: bold;
}</style>