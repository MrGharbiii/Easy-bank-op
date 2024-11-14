import { createRouter, createWebHistory } from 'vue-router'
import ScreenView from '../views/ScreenView.vue'
import ChoixService from '../views/ChoixService.vue'
import Signature from '../views/Signature.vue'
import Preview from '../views/Preview.vue'
import PhoneUpload from '../views/PhoneUpload.vue'
import Camera from '../views/Camera.vue'
import Coupon from '../views/Coupon.vue'
import Print from '../views/Print.vue'
import Historique from '../views/Historique.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ScreenView
    },
    {
      path: '/choix-service',
      name: 'Choix Service',
      component: ChoixService
    },
    {
      path: '/signature',
      name: 'Signature',
      component: Signature
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/upload',
      name: 'UploadPhone',
      component: PhoneUpload
    },
    {
      path: '/camera',
      name: 'Camera',
      component: Camera ,
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon ,
    },
    {
      path: '/print',
      name: 'Print',
      component: Print ,
    },
    {
      path: '/historique',
      name: 'Historique',
      component: Historique ,
    },
   
    
   
  ]
})

export default router

