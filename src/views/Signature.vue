<script>
import VueDrawingCanvas from 'vue-drawing-canvas'
import HeaderComponent from '../components/HeaderComponent.vue'
import domtoimage from 'dom-to-image';

export default {
  components: { HeaderComponent , VueDrawingCanvas },
        name:"Signature",
  data() {
    return {
     src : null
    };
  },
  computed: {
      
    },
  methods: {
    edit_signature(sigSrc){
      this.$store.state.signatureSrc = sigSrc
    },
    saveSig(){
      console.log('====================================');
      console.log(this.$refs.canvas);
      console.log('====================================');
      domtoimage.toPng(this.$refs.canvas)
    .then ((dataUrl) => {
        const img = new Image();
        console.log('====================================');
        console.log(dataUrl);
        console.log('====================================');
        this.src = dataUrl

        this.edit_signature(this.src)
        this.$router.push('/preview');
        

        
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
    
    },
 
  }
};

</script>

<template>
    <HeaderComponent />
  <main>
    <div class="left-scan">
     
        <div class="container-text"><div class="text">Deposer votre signature à l’aide du Stylo Magique </div></div>
        <div class="container-scan"><div class="scan">
              <div id="canvas" ref="canvas">
                <vue-drawing-canvas
                ref="VueCanvasDrawing"/>
              </div>
        </div>
      </div>
        <div @click="saveSig" class="container-button button-confirmer">Confirmer</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 
* {
font-family: "Istok web", sans-serif;
}
.container-scan{
    width: fit-content;
    margin-top: 5%;
}
.container-text{
    width: fit-content;
    margin-top: 5%;
}
.container-button{
    width: fit-content;
    margin-left: 75%;
    margin-top: 1%;
}
.left-scan{
    border: rgba(255, 0, 0, 0) solid 1px;
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
.button-confirmer{
    border-radius: 9px;
    background: #D9D9D9;
    width: 200px;
    height: 60px;
    color: #003e03;
    font-family: Istok Web;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    border: rgb(0, 58, 2) solid 6px;
}
main{
  display: flex;
  justify-content: space-around;
  background: #002E59;
  height: 800px;
}


.text{
  color: #D9D9D9;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
}
.scan{
  border-radius: 20px;
  border: 6px solid #F00;
  background: #D9D9D9;
  width: fit-content;
  height: fit-content;
}
</style>