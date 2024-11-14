<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import Camera from './Camera.vue';


</script>

<template>
  <HeaderComponent />
  <main>
    <div class="left-scan">
        <div class="text">Placer Votre CIN ou Passport sur le scanner</div>
        
       
          <Camera />
        
    </div>
    <div class="right-scan">
        <div class="text">Ou bien passer au télephone</div>
        <div class="image-holder">
         <img @click="openUpload" class="image" src="../assets/qr.png" alt="QR">
        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 
* {
font-family: "Istok web", sans-serif;
}
main{
  display: flex;
  justify-content: space-around;
  background: #002E59;
  height: 800px;
}
.right-scan{
  border-left: #D9D9D9 solid 1px;
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left-scan{
  border: rgba(255, 0, 0, 0) solid 1px;
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text{
  color: #D9D9D9;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: rgba(255, 0, 0, 0) solid 1px;
  margin-top: 100px;
}
.scan{
  border-radius: 20px;
  border: 6px solid #F00;
  background: #D9D9D9;
  width: fit-content;
  height: fit-content;
  margin: auto;
}
.image-holder{
  margin-top: 20%;
}
img{
  width: 300px;
}


</style>