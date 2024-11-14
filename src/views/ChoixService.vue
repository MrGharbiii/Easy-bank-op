<script>
import { ref } from "vue"
import HeaderComponent from '../components/HeaderComponent.vue'




export default {
  components: { HeaderComponent },
        name:"ChoixService",
  data() {
    return {
      montant : ref(""),
      service : ref(0)
    };
  },
  methods: {
    edit_all(mont,ser){
      this.$store.state.montant = mont
      this.$store.state.service = ser
    },
    next(){
      this.edit_all(this.montant,this.service)
      this.$router.push('/signature');
    }
  }
};


</script>

<template>
    <HeaderComponent />
  <main>
    <div class="left-side">
      <div class="greeting">Bienvenue, {{ this.$store.state.fullName }}</div>
    
        <div class="text">Choisir un Service</div>
        <div class="buttons">
            <div @click="service = 1" 
            :style="{backgroundColor : service == 1 ? 'green' : 'white'} " 
            class="button-retrait">Retrait</div>
            <div @click="service = 2" 
            :style="{backgroundColor : service == 2 ? 'green' : 'white'} " 
            class="button-depot">Depot</div>
        </div>
    </div>
    <div class="right-side">
        <div class="montant">
            <div class="montant-text">Montant :</div>
            <div class="montant-textField">
            {{ montant }}
            </div>
        </div>
        <div class="clavier">
            <div class="first-row">
                <div @click="montant += 1" class="button-chiffre">1</div>
                <div @click="montant += 2" class="button-chiffre">2</div>
                <div @click="montant += 3" class="button-chiffre">3</div>
            </div>
            <div class="second-row">
                <div @click="montant += 4" class="button-chiffre">4</div>
                <div @click="montant += 5" class="button-chiffre">5</div>
                <div @click="montant += 6" class="button-chiffre">6</div>
            </div>
            <div class="third-row">
                <div @click="montant += 7" class="button-chiffre">7</div>
                <div @click="montant += 8" class="button-chiffre">8</div>
                <div @click="montant += 9" class="button-chiffre">9</div>
            </div>
            <div class="last-row">
                <div @click="montant = montant.slice(0,-1);" class="button-chiffre">del</div>
                <div @click="montant += 0" class="button-chiffre">0</div>
               <div v-if="service && montant" class="button-chiffre" @click="next"><img src="../assets/confirmation.png" alt=""></div>
               <div v-else class="button-inactive" ><img src="../assets/confirmation.png" alt=""></div>
            </div>
        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 
* {
font-family: "Istok web", sans-serif;
}
.button-depot{
    border-radius: 5px;
    background: #D9D9D9;
    width: 382px;
    height: 112px;
    color: #002E5B;
    font-family: Istok Web;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
}
.button-retrait{
    border-radius: 5px;
    background: #D9D9D9;
    width: 382px;
    height: 112px;
    color: #002E5B;
    font-family: Istok Web;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30%;
}
img{
    width: 35px;
}

.clavier{
    margin-top: 90px;
    margin-right: 20px;
    height: 360px;
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.first-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.second-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.third-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.last-row{
    display: flex;
    flex-direction: row;
    gap: 8px;
}
.button-chiffre{
    float: left;  
    margin: 0 5px 5px 0;  
    width: 80px;  
    height: 80px;  
    font-size: 40px;
    line-height: 60px;  
    text-align: center;  
    background: #D9D9D9;  
    border-radius: 5px;  
    display: flex;
    justify-content: center;
    align-items: center;
}
.button-inactive{
    float: left;  
    margin: 0 5px 5px 0;  
    width: 80px;  
    height: 80px;  
    font-size: 40px;
    line-height: 60px;  
    text-align: center;  
    background: #6f6f6f;  
    border-radius: 5px;  
    display: flex;
    justify-content: center;
    align-items: center;
}
main{
    display: flex;
    justify-content: space-around;
    background: #002E59;
    height: 800px;
  }
  .right-side{
    border-left: #D9D9D9 solid 1px;
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left-side{
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
  .greeting{
    color: #D9D9D9;
    width: 100%;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-left: 5%;
    margin-top: 1%;
 
  }
  .montant{
    margin-top: 150px;
    display: flex;
    border: rgba(255, 0, 0, 0) solid 1px;
    width: 50%;
    height: 10%;
  }
  .montant-text{
    border: rgba(255, 0, 0, 0) solid 1px;
    color: rgb(217, 217, 217);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
  .montant-textField{
    border: rgb(223, 213, 213) solid 1px;
    background-color: #D9D9D9;
    height: 100%;
    width: 50%;
    margin: 0%;
    color:#002E5B;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  input[type=text]{
    height: 80%;
    width: 50%;
   
    font-size: 30px;
  }
  input[type=text]:focus {
    border: 3px solid #555;
  }
</style>