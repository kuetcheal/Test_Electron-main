import { createRouter, createWebHistory } from 'vue-router';
import Connexion from '../components/connexion.vue';
import HomePage from '../components/homePage.vue';


const routes = [
  {
    path: '/',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/homePage',
    name: 'HomePage', 
    component: HomePage
  }
 
];

// Créez votre routeur en utilisant createRouter
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router;
