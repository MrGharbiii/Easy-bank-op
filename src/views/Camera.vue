<template>
  <div class="all">
    {{ sharedInfo }}
    <div class="language">
      <div @click="language = 'ara'"><img :style="{border : this.language == 'ara' ? 'solid 6px green' :  null , borderRadius : this.language == 'ara' ? '50%' : null} " class="arabic" src="../assets/tunisia.png" alt="ara"></div>
      <div @click="language = 'fre'"><img :style="{border : this.language == 'fre' ? 'solid 6px green' :  null , borderRadius : this.language == 'fre' ? '50%' : null} " class="francais" src="../assets/france.png" alt="fre"></div>
    </div>
    <div  class="scan">
    <!-- <div class="camera-button">
      <button type="button" class="button is-rounded" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
        <span v-if="!isCameraOpen">Open Camera</span>
        <span v-else>Close Camera</span>
    </button> 
  </div> -->
  
  <div v-show="isCameraOpen && isLoading" class="camera-loading">
    <ul class="loader-circle">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  
  <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
    
    <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
      
    <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>
    
    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
  </div>
  
  <div v-if="isCameraOpen && !isLoading" class="camera-control">
    <button type="button" class="button" @click="takePhoto">
      <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
    </button>
    <div class="loader" v-show="isLoadingExtraction" ></div>
    <button type="button" class="button" @click="extractText">
      <img src="https://img.icons8.com/material/50/general-ocr.png">
    </button>
  </div>
  
  

  
  
  <!-- <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
      Download
    </a>
  </div> -->

    <!-- <input type="file" ref="fileInput" @change="handleFileUpload" />
    <button @click="extractText">Extract Text</button>
      
      {{ isLoadingExtraction }}
    <div v-if="extractedText">{{ extractedText }}</div>  -->

  </div>
</div>
</template>

<script>
import axios from 'axios'



export default {
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      apikey: 'XXXXXXX',
      url:'http://192.168.1.98:8081/Screenshot%202023-08-17%20100317.png',
      file : null,
      imagePath : "./Screenshot1.png",
      language: 'fre',
      isOverlayRequired : true ,
      // filetype : 'PNG',
      extractedText: null,
      photo : null,
      isLoadingExtraction: false
    
    };
  },
  computed: {
      
    },
  methods: {

    edit_fullname(name){
      this.$store.state.fullName = name
    },
    edit_numcin(cin){
      this.$store.state.numCin = cin
    },
 

    toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }

    },
    
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});


			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
				});
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    
      this.photo = canvas
      console.log(this.photo);
    },
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    
      this.photo = canvas
      console.log(this.photo);
    },



    endLoading() {
      this.isLoadingExtraction = false;
    },



    async extractText() {
      // if (!this.file) {
      //   console.error('No file selected.');
      //   return;
      // }
      
      this.isLoadingExtraction = true;
      const formData = new FormData();
      formData.append('apikey', this.apikey);
      formData.append('base64Image', this.photo);
      formData.append('language', this.language);
      formData.append('isOverlayRequired', true);

      const headers = {
        'Content-Type': 'multipart/form-data',
        'api-key': this.apikey
      };

      try {
        const response = await axios.post('https://api.ocr.space/parse/image', formData, { headers });
        this.extractedText = response.data; // Adjust the response structure as per your API
      } catch (error) {
        console.error('Error extracting text:', error);
      } 
      this.isLoadingExtraction = false;
      this.edit_fullname("أحمد الغربي")
      this.edit_numcin("14029")
      this.$router.push('/choix-service');
  
    }
    
  },
  mounted(){
    this.toggleCamera()
    console.log(this.$store.state.count);
  }
};
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.camera-control{
  display: flex;
  justify-content: space-evenly;
}
.scan{
  border-radius: 20px;
  border: 6px solid #F00;
  background: #D9D9D9;
  width: fit-content;
  height: fit-content;
}
.all{
  margin-top: 1%;
}
.arabic{
  
  width: 100px;
 
}
.francais{
  width: 100px;

}
.language{
  display: flex;
  margin-top: 3%;
  margin-bottom: 2%;
  width: 100%;
  justify-content: space-evenly;
}
</style>