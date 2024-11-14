<script>

    // import CouponDataService from '../services/CouponDataService';

    // list = CouponDataService.getAll()
    // console.log(list);
    import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fs from 'fs'
import { jsPDF } from "jspdf";
import Coupon from '../views/Coupon.vue'



    export default{
  components: { HeaderComponent,Coupon },
        name:"Preview",
        data(){
            return{
                coup : null,
                pdf : null,
                SRC : this.$store.state.signatureSrc,
                imageTest : "../assets/coupDep.jpg"
            };
        },

        methods: {
            printDoc(){
            window.print()
            this.$router.push('/');
         },
        },
       

        mounted(){
            
        //   this.createPdf()
       this.printDoc()
        
        }
    }


</script>

<template>

  <main>
    <div class="left-scan">
        <div class="container-text"><div class="text"></div></div>
        <div class="container-pdf">
                <Coupon />
        </div>
        <div class="buttons">
   

        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 
* {
font-family: "Istok web", sans-serif;
}
.buttons{
  
    display: flex;
    justify-content: space-between;
    width: 90%;
}
.container-scan{
    width: fit-content;
    margin-top: 5%;
}
.container-text{
    width: fit-content;
    margin-top: 1%;
    margin-bottom: 3%;
   
}

img{
    width: 800px;
    height: 550px;
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
.button-rescanner{
    border-radius: 9px;
    background: #D9D9D9;
    width: 200px;
    height: 60px;
    color: #8b0000;
    font-family: Istok Web;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #8b0000 solid 6px;
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
  width: 650px;
  height: 350px;
}
</style>