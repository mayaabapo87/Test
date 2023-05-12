<template>
<<<<<<< HEAD
<button @click="checkApproval">Check Approval</button>
<div v-if="approved" class="success-message">Pass has been approved!</div>
<div v-else class="error-message">Pass has been denied!</div>
</template>


=======
  <div>
    <button @click="checkApproval">Check Approval</button>
    <div v-if="approvalStatus" class="success-message">{{ approvalStatus }}</div>
    <div v-else-if="unapprovedItems.length > 0" class="error-message">
      Pass is not fully approved. Unapproved items: {{ unapprovedItems.join(", ") }}
    </div>
    <div v-else class="error-message">Pass not found</div>
  </div>
</template>

>>>>>>> 4022c026 (cleaning up backend)
<script>
import axios from 'axios';

export default {
  name: 'FetchForm',
<<<<<<< HEAD
  methods: {
    checkApproval() {
      axios.get('/fetch-data')
      .then(response => {
          const data = response.data;
          const allApproved = data.every(doc => {
            return doc.ver.signed && doc.appr.every(item => item.approved) && doc.rcv.signed;
          });
          if (allApproved) {
            // Send a request to your server to mark the approval status as true
            axios.post('/mark-approved')
              .then(response => {
                // Handle the response
                this.approved = true;
              })
              .catch(error => {
                // Handle the error
                this.approved = false;
              });
          } else {
            this.approved = false;
          }
        })
        .catch(error => {
          // Handle the error
          this.approved = false;
=======
  data() {
    return {
      passId: 'your-pass-id',
      approvalStatus: '',
      unapprovedItems: []
    };
  },
  methods: {
    checkApproval() {
      axios.get(`/check_approval/${this.passId}`)
        .then(response => {
          if (response.data.message === 'The pass is approved') {
            this.approvalStatus = response.data.message;
            this.unapprovedItems = [];

          } else if (response.data.message === 'The pass is not fully approved') {
            this.approvalStatus = '';
            this.unapprovedItems = response.data.unapprovedItems;
            
          } else {
            this.approvalStatus = '';
            this.unapprovedItems = [];
          }
        })
        .catch(error => {
          console.log(error);
          this.approvalStatus = '';
          this.unapprovedItems = [];
>>>>>>> 4022c026 (cleaning up backend)
        });
    }
  }
}
</script>

<style scoped>
<<<<<<< HEAD
=======
.success-message {
  color: green;
}

.error-message {
  color: red;
}
</style>


<style scoped>
>>>>>>> 4022c026 (cleaning up backend)

</style>

