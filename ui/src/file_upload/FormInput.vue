<template>
  <div class="overlay">
    <div class="form-container">
      <h2 class="form-title">Upload Files</h2>
      <form @submit.prevent="submitForm">
        <div class="form-field">
          <label class="form-label">Choose files to attach:</label>

          <div>
            <label>{{ label }}</label>
            <div>
              <input type="file" style="margin: 0 auto" multiple @change="handleFileInput" />
              <ul>
                <li v-for="(file, index) in selectedFiles" :key="file.name">
                  {{ file.name }}
                  <q-btn color="button" style="border-radius: 8px;" label="Remove" @click="removeFile(index)"/>
                </li>
              </ul>
            </div>
          </div>

          <p class="form-note">Accepted file types: PDF, Excel, JPG, PNG, Word <br> 
            Upload only a max of 16MB per file (2 max)</p>
        </div>
        <div class="form-field" style="display: flex; justify-content: space-around; margin-bottom: 5px;">
          <div style="padding: 0; margin: 0;">
            <div class="square_btn">
              <img src="../assets/check.png" 
              style="
                border: none;
                width: 22px;
                height: 22px;
                filter: invert(100%) sepia(0%) saturate(7499%) hue-rotate(173deg) brightness(102%) contrast(101%);" @click="uploadFile(formData)" />
            </div>
          </div>

          <div style="padding: 0; margin: 0;">
            <div class="square_btn">
              <img src="../assets/close.png" 
              style="
                border: none;
                width: 18px;
                height: 18px;
                filter: invert(100%) sepia(0%) saturate(7499%) hue-rotate(173deg) brightness(102%) contrast(101%);" @click="closeOverlay" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { api } from 'boot/axios-config.js';

export default {
  name: 'FormInput',

  data() {
    return {
      selectedFiles: [],
    };
  },

  props: {
    passId: {
      type: String,
      required: true,
    },
    maxFiles: {
      type: Number,
      default: 2,
    },
  },

  methods: {
    async handleFileInput(event) {
      const selectedFiles = Array.from(event.target.files);
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
      ];
      const newFiles = selectedFiles.filter((file) =>
        allowedTypes.includes(file.type)
      );
      const invalidFiles = selectedFiles.filter(
        (file) => !allowedTypes.includes(file.type)
      );
      const invalidLength =
        this.selectedFiles.length + newFiles.length > this.maxFiles;
      if (invalidLength) {
        alert(`Please upload no more than ${this.maxFiles} files.`);
      } else if (invalidFiles.length > 0) {
        alert("Invalid file type.");
      } else {
        this.selectedFiles.push(...newFiles);
        this.formData = new FormData();
        newFiles.forEach((file) => {
          this.formData.append('file', file);
        });
      }
    },

    removeFile(index) {
      this.selectedFiles.splice(index, 1);
      const files = this.selectedFiles.map((file) => file.name);
    },

    async uploadFile(formData){
      try {
        const response = await api.post(`/upload/${this.passId}`, formData);
        console.log(response.data);

        const files = this.selectedFiles.map((file) => file.name);
        alert(`Successfully uploaded to pass ${this.passId}!`); // Handle the response from the server
        this.closeOverlay();
      } catch (error) {
          console.error(error);
          alert('File upload failed.');
        }
    },

    handleFileChange(file) {
      this.formData = file;
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
