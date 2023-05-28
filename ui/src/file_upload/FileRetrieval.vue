<template>
  <div class="overlay">  
    <div class="container">
      <h2 class="form-title">View File</h2>
      <div ref="fileContainer" style="margin: 10px 0;"></div>

      <div class="bContainer">
        <div style="padding: 0; margin: 0;">
          <div class="square_btn">
            <img src="../assets/dl.png" 
            style="
                  border: none;
                  width: 20px;
                  height: 20px;
                  filter: invert(100%) sepia(0%) saturate(7499%) hue-rotate(173deg) brightness(102%) contrast(101%);" @click="dlFile(passId)" />
          </div>
        </div>
        
        <div style="padding: 0; margin: 0;">
          <div class="square_btn">
            <img src="../assets/delete.png" 
            style="
                  border: none;
                  width: 25px;
                  height: 25px;
                  filter: invert(100%) sepia(0%) saturate(7499%) hue-rotate(173deg) brightness(102%) contrast(101%);" @click="deleteFile(passId)" />
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
    </div>
  </div>
</template>

<script>
import { api } from 'boot/axios-config.js';

export default {
  name: "FileRetrieval",
  props: {
    passId: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      fileExt: null,
      fileName: '',
    };
  },

  methods: {
    deleteFile(passId) {
      return api.delete(`/${passId}`)
        .then(response => {
          alert('File successfully deleted!')
          console.log()
          return response.data;
        })
        .catch(error => {
          alert('Error deleting file!')
          console.error(error);
          throw error;
        });
    },

    getFileUrl(passId) {
      return api.get(`/${passId}`, { responseType: 'blob' })
        .then(response => {
          const contentType = response.headers['content-type'];
          const fileExtension = this.getFileExt(contentType);
          this.fileExt = fileExtension;
          
          const fileUrl = URL.createObjectURL(response.data);
          return fileUrl;
        })
        .catch(error => {
          console.error('Error retrieving file:', error);
          throw error; // Rethrow the error to propagate it
        });
    },

    dlFile(passId) {
      this.getFileUrl(passId)
        .then(fileUrl => {
          const downloadLink = document.createElement('a');
          downloadLink.href = fileUrl;
          downloadLink.download = `${passId}.${this.fileExt}`; // Set the desired filename with the appropriate extension

          // Trigger the download
          downloadLink.click();

          // Clean up the download link
          URL.revokeObjectURL(fileUrl);
        })
        .catch(error => {
          console.error('Failed to fetch and download file:', error);
        });
    },

    getFileExt(contentType) {
      switch (contentType) {
        case 'application/pdf':
          return 'pdf';
        case 'image/png':
          return 'png';
        case 'image/jpeg':
          return 'jpg';
        // Add more cases for other content types if needed
        default:
          return 'file';
      }
    },
    
    displayFile(passId) {
      this.getFileUrl(passId)
        .then(fileUrl => {
          console.log(`${fileUrl}`)

          if (this.fileExt === 'jpg' || this.fileExt === 'png') {
            this.displayImage(fileUrl);
          } else if (this.fileExt === 'pdf') {
            this.displayPDF(fileUrl);
          } else {
            console.error('Unsupported file format:', this.fileExt);
          }
        })
        .catch(error => {
          console.error('Failed to fetch and display file:', error);
        });
    },
    
    //this doesnt make sense yet
/*     formatFileSize(size) { 
      if (size < 1024) {
        return size + ' B';
      } else if (size < 1024 * 1024) {
        return Math.round((size / 1024) * 100) / 100 + ' KB';
      } else {
        return Math.round((size / (1024 * 1024)) * 100) / 100 + ' MB';
      }
    }, */

    displayImage(fileUrl) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          const imageElement = document.createElement('img');
          imageElement.src = base64data;
          imageElement.setAttribute('color-profile', 'sRGB');
          imageElement.style.Width = 'auto';
          imageElement.style.minHeight = 'auto';
          imageElement.style.maxHeight = '450px';
          this.$refs.fileContainer.appendChild(imageElement);
        };
        reader.readAsDataURL(xhr.response);
      } else {
        console.error('Failed to retrieve image:', xhr.statusText);
      }
    };
    xhr.send();
  },

    displayPDF(fileUrl) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fileUrl, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result;
            const pdfEmbedElement = document.createElement('embed');
            pdfEmbedElement.setAttribute('src', base64data);
            pdfEmbedElement.setAttribute('type', 'application/pdf');
            pdfEmbedElement.style.width = '400px';
            pdfEmbedElement.style.height = '500px';
            this.$refs.fileContainer.appendChild(pdfEmbedElement);
          };
          reader.readAsDataURL(xhr.response);
        } else {
          console.error('Failed to retrieve PDF:', xhr.statusText);
        }
      };
      xhr.send();
    },

    closeOverlay() {
      this.$emit('close-overlay');
    },
  },

  mounted() {
    this.displayFile(this.passId)
  },
};
</script>

<style scoped>
img{
  border: var(--borGrey);
}

.bContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
}

.container {
  align-items: center;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  height: auto;
  margin: 0 auto;
  padding: 20px 12px;
}
.title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.file-list {
  list-style-type: none;
  padding: 0;
}

.file-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px;
}

.file-info {
  display: flex;
  align-items: center;
}

.file-icon {
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.file-details {
  display: flex;
  flex-direction: column;
}

.file-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.file-size {
  font-size: 12px;
  color: #777;
  margin: 0;
}

.download-link:hover {
  background-color: #45a049;
}
</style>
