<template>
  <div class="overlay">
    <div class="form-container">
      <h2 class="form-title">Upload Files</h2>
      <form @submit.prevent="submitForm">
        <div class="form-field">
          <label class="form-label">Choose files to attach:</label>
          <file-input label="Attach files" :passId="passId" :onChange="handleFileChange" />
          <p class="form-note">Accepted file types: PDF, Excel, JPG, PNG, Word</p>
        </div>
        <div class="form-field" style="display: flex; justify-content: space-around; margin-bottom: 5px;">
          <submit-button/>
          <q-btn color="button" style="border-radius: 8px;" @click="closeOverlay" label="Close"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FileInput from "./FileInput.vue";
import SubmitButton from "./SubmitButton.vue";

export default {
  name: 'FormInput',
  components: {
    FileInput,
    SubmitButton,
  },
  props: {
    passId: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleFileChange(file) {
      // Do something with the file
      console.log(file);
    },
    submitForm() {
      // Submit the form data
      console.log('Form submitted');
      this.closeOverlay();
    },
    closeOverlay() {
      this.$emit('close-overlay');
    },
  },
};
</script>

<style>

/* Styles for the form container and header */
.form-container {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.form-title {
  font-family: var(--header);
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 26px;
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin-top: 0;
  margin-bottom: 10px;
}

/* Styles for the form fields */
.form-field {
  margin-bottom: 20px;
}

.form-label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  display: block;
}
.form-note {
  font-size: 14px;
  color: #888;
  margin-top: 5px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
