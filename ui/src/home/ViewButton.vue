<template>
  <div class="square_btn">
    <img src="../assets/view.svg" style="height: 25px; width: 25px;" @click="openOverlay">
    <RetrieveOverlay v-if="showOverlay" :passId="passId" @close-overlay="closeOverlay" />
  </div>
</template>
  
<script>
  import RetrieveOverlay from '../file_upload/FileRetrieval.vue';

  export default {
    name: 'ViewButton',
    props: {
      passId: {
        type: String,
        required: true
      }
    },
  
    data() {
      return {
        showOverlay: false
      };
    },
  
    methods: {
      openOverlay() {
        this.showOverlay = true;
      },
      
      closeOverlay() {
        this.showOverlay = false;
      }
    },
  
    components: {
      RetrieveOverlay
    }
  };
</script>

<style scoped>
  img {
  width: 20px;
  height: 20px;
  filter: invert(100%) sepia(0%) saturate(7499%) hue-rotate(173deg) brightness(102%) contrast(101%);
}
</style>
