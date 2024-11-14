<script>
import { ref } from "vue"

export default {
  data() {
    return {
        SERVICE : null

    };
  },
  mounted(){
   if(this.$store.state.service == 1){
    this.SERVICE = "RETRAIT"
   }else{
    this.SERVICE = "DEPOT"
   }
   const currentdate = new Date(); 
const datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

this.$store.state.date = datetime
  }
};


</script>


<template>
    <div class="main">
        <div class="header-main">
            <div class="image-holder"><img height="80" src="../assets/logo.png" alt=""></div>
            <div class="title">BANQUE DE TUNISIE</div>
          </div>
        <div class="form">
            <div class="service">{{ SERVICE }}</div>
            <div class="element">
                <div class="label">N°CIN</div>
                <div class="champ">
                    {{ this.$store.state.numCin }}
                </div>
            </div>
            <div class="element">
                <div class="label">Titulaire</div>
                <div class="champ">
                    {{ this.$store.state.fullName }}
                </div>
            </div>
            <div class="element">
                <div class="label">Montant</div>
                <div class="champ">
                    {{ this.$store.state.montant }}
                </div>
            </div>
            <div class="element">
                <div class="label">Agence</div>
                <div class="champ">
                    {{ this.$store.state.agence }}
                </div>
            </div>
            <div class="element">
                <div class="label">Date Op</div>
                <div class="champ">
                    {{ this.$store.state.date }}
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="sig">Signature</div>
            <div class="sigHolder">
                <img :src="this.$store.state.signatureSrc" width="119">
            </div>
        </div>
        
 
 
 
    </div>
</template>

<style scoped>
.sigHolder{
    border: 1px solid #002E5B;
background: #FFF;
width: fit-content;
height: fit-content;
flex-shrink: 0;
margin-right: 18px;
}
.sig{
    color: #002E5E;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 77px;
height: 26px;
flex-shrink: 0;
margin-right: 15px;
}
.footer{
   
    display: flex;
    align-items: center;
    justify-content: right;
   margin-top: 30px;

}
.main{
    height: 564px;
    width: 485px;
    border: solid 1px rgba(255, 0, 0, 0);
    background: #d9d9d9;
}
.header-main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: solid 1px rgba(255, 0, 0, 0);
    width: auto;
    margin-top: 20px;
    
}
.image-holder{
    flex: 0;
    margin-left: 5%;
}
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: rgba(255, 0, 0, 0) solid 1px;
}
.title{
    flex: 1;
    color: #002E5E;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10%;
}
.service{
    color: #002E5E;

font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 109px;
height: 32px;
flex-shrink: 0;
margin-bottom: 40px;
margin-top: 10px;
}
.label{
    color: #002E5E;
width: 77px;
height: 26px;
flex-shrink: 0;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.champ{
    width: 230px;
    font-size: 25px;
height: 32px;
flex-shrink: 0;
border: 1px solid #002E5B;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
}
.element{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 13px;
}

</style>

