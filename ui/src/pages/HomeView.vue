<template>
  <div>
    <div class="dash" style=" text-align: left;">
      <div id="top-text">Active Passes</div>
      <PassApproval/>
    </div>
  </div>
</template>

<script>
import PassApproval from "src/home/PassApproval.vue";

export default {
  name: 'HomeView',
  components: {
    PassApproval,
  }
}
</script>

<style scoped>
.dash{
  min-height: 100vh;
  width: auto;
  padding: 40px 100px 100px 100px;
  border-left: var(--borGrey);
  border-right: var(--borGrey);
  background-color: #fff;
}
</style>
