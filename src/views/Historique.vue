<script>
import mysql from "mysql"
export default {
  components: {  },
        name:"Historique",
  data() {
    return {
        coups : null
    };
  },
  methods: {
    async fetchData(){
                const response = await fetch('http://127.0.0.1:8080/api/coupons');
                const result = await response.json();
                this.coups = result
    }
  },
  mounted(){
    this.fetchData()
    

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "tpjava"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM coupons", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     this.coups = result
//   });
// });
   }
};


</script>

<template>
    <div class="main">
        <div class="header">
            <div class="image-holder"><img src="../assets/logo.png" alt=""></div>
            <div class="title">BANQUE DE TUNISIE</div>
          </div>
          <div class="container">
            <div class="history">
                <div v-for="coup in coups" class="coup">
                    <div class="name">{{ coup.name }}</div>
                    <div class="cin">{{ coup.numcin }}</div>
                    <div class="service">{{ coup.service }}</div>
                    <div class="service">{{ coup.montant }}</div>

                </div>
            </div>
        
          </div>
    </div>
</template>

<style scoped>
.main{
    background-color: #002E5B;
 height: fit-content;
}
.coup{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border: 1px solid rgb(144, 144, 144);
    border-radius: 20px;
    height: 50px;
}

.history{
    width: 678px;
height: fit-content;
flex-shrink: 0;
background: #D9D9D9;
margin-top: 100px;
border-radius: 20px;
}
.container{
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
    
}
.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: rgba(255, 0, 0, 0) solid 1px;
    background: #D9D9D9;
    height: 270px;
    width: auto;
}
img{
    width: 160px;
}
.image-holder{
    flex: 0;
    border: rgba(102, 0, 255, 0) solid 1px;
    margin-left: 3%;
}
.title{
    flex: 1;
    margin-left: 24%;
    border: rgba(255, 0, 140, 0) solid 1px;
    color: #002E5E;
    font-size: 75px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>