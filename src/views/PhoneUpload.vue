<script>
import axios from "axios";

export default {
    name:'FileUpload',
  data() {
    return {
      file:"",
      message:"",
      selected : false,
      uploaded : false,
      apikey: '8e4bcb9bce88957',
      url:'http://192.168.1.98:8081/Screenshot%202023-08-17%20100317.png',
      file : null,
      imagePath : "./Screenshot1.png",
      language: 'fre',
      isOverlayRequired : true ,
      // filetype : 'PNG',
      extractedText: null,
      photo : null,
      isLoadingExtraction: false

    }
  },
  methods: {
    edit_fullname(name){
      this.$store.state.fullName = name
    },
    edit_numcin(cin){
      this.$store.state.numCin = cin
    },
 
    onSelect(){
        const file = this.$refs.file.files[0];
        this.file = file;
        this.selected = true
    },
    async onSubmit(){
        const formData = new FormData();
        formData.append('file',this.file);
        this.uploaded = true
        await axios.post('http://127.0.0.1:8080/api/upload',formData);
    },

    handleFileUpload() {
      this.file = this.$refs.fileInput.files[0];
    },

    async extractText() {
      // if (!this.file) {
      //   console.error('No file selected.');
      //   return;
      // }
      
      this.isLoadingExtraction = true;
      const formData = new FormData();
      formData.append('apikey', this.apikey);
      formData.append('file', this.file);
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
      this.edit_fullname("Ahmed")
      this.edit_numcin("")

      this.$router.push('/choix-service');
     
    }
    // onFileChange(e) {
    //   const selectedFile = e.target.files[0]; // accessing file
    //   this.selectedFile = selectedFile;
    // },
    // onUploadFile() {
    //   const formData = new FormData();
    //   formData.append("file", this.selectedFile);  // appending file

    //  // sending file to the backend
    //   axios
    //     .post("http://127.0.0.1:8080/upload", formData)
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<template>
    <main>

        <div class="mc">
            <div class="cc">
                <div class="container">
                    <div class="logo">
                        <img src="../assets/logo.png" alt="LOGO">
                    </div>
                    <div class="language">
                        <div @click="language = 'ara'"><img :style="{border : this.language == 'ara' ? 'solid 6px #002E59' :  null , borderRadius : this.language == 'ara' ? '50%' : null} " class="arabic" src="../assets/tunisia.png" alt="ara"></div>
                        <div @click="language = 'fre'"><img :style="{border : this.language == 'fre' ? 'solid 6px #002E59' :  null , borderRadius : this.language == 'fre' ? '50%' : null} " class="francais" src="../assets/france.png" alt="fre"></div>
                      </div>
                    <div class="holder"><input type="file" ref="fileInput" @change="handleFileUpload"/></div>
                    <div v-show="!isLoadingExtraction" @click="extractText" class="imgHolder"><img src="https://img.icons8.com/material/80/general-ocr.png" alt=""></div>
                   
                        <!-- {{ extractedText.ParsedResults[0].TextOverlay.Lines[3].LineText }}
                        {{ extractedText.ParsedResults[0].TextOverlay.Lines[5].LineText }} -->
                        <div class="loader" v-show="isLoadingExtraction" ></div>
                    
                    <!-- {{ isLoadingExtraction }} -->
                    <!-- <div class="button-upload">
                          <form method="POST" @submit.prevent="onSubmit" enctype="multipart/form-data">
                            <input type="file"  name="file" ref="file" @change="onSelect">
                            <button v-show="selected">Submit</button>
                          </form>
                    </div>
                     {{ selected }}
                    {{ uploaded }}
                    <div class="next" v-show="selected && uploaded">
                        <a href="/choix-service">NEXT</a>
                    </div> -->
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>


.holder{
    
    border: solid #002E59 3px;
    border-radius: 5px;
    height: 40px;
    width: 90%;
    margin-bottom: 10%;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ip{
    background-color: #002E59;
}
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #002E59; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: 20%;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 
* {
font-family: "Istok web", sans-serif;
margin: 0%;
padding: 0%;
}
.language{
    margin-top: 10%;
    margin-bottom: 10%;
}
.logo{
    margin-top: 20%;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.button-upload-sub{

    margin-left: 20px;
    color: #D9D9D9;
}
.button-upload{
 
    display: flex;
    align-items: center;
    width: 70%;
    height: 60px;
    margin-top: 50%;
    background-color: #002E59;
    border-radius: 8px;
}
.upload-logo{

    width: fit-content;
    height: fit-content;
    margin-left: 30%;
}
.mc{
    background: #002E59;
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cc{
    border-radius: 5px;
    background: #D9D9D9;
    width: 300px;
    height: 800px;
}
.language{
    display: flex;
    margin-top: 3%;
  margin-bottom: 2%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
   
  }
.arabic{
  
    width: 70px;
   
  }
  .francais{
    width: 70px;
  
  }


</style>