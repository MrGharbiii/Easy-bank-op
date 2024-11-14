import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'



const store = createStore({
    state () {
      return {
        fullName : "",
        numCin : "",
        montant : "",
        agence : "Moknine 3",
        date : "",
        service : "",
        signatureSrc : ""
      }
    },
    mutations: {
      EDIT_FULLNAME (state,payload) {
        state.fullName = payload 
      },
      EDIT_NUMCIN (state,payload) {
        state.numCin = payload 
      },
      EDIT_MONTANT (state,payload) {
        state.montant = payload 
      },
      EDIT_DATE (state,payload) {
        state.date = payload 
      },
      EDIT_SERVICE (state,payload) {
        state.service = payload 
      },
      EDIT_SIGNATURE (state,payload) {
        state.signatureSrc = payload 
      }
    }
  })


const app = createApp(App)

app.use(router)
app.use(Vuex)
app.use(store)



app.mount('#app')
