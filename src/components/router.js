import { createRouter, createWebHistory } from 'vue-router';
import ConnexionPage from '../components/connexionPage.vue';
import InscriptionPage from '../components/inscriptionPage.vue';
import HomePage from '../components/homePage.vue';
import ErrorPage from '../components/errorPage.vue';
import ContactPage from '../components/contactPage.vue';
import ServicePage from '../components/servicePage.vue';
import ForgotPasswordPage from '../components/forgotPasswordPage.vue';
//import AppNavbar from '../components/AppNavbar';

const routes = [
  {
    path: '/',
    name: 'ConnexionPage',
    component: ConnexionPage
  },
  {
    path: '/inscriptionPage',
    name: 'InscriptionPage',
    component: InscriptionPage
  },
  {
    path: '/homePage',
    name: 'HomePage', 
    component: HomePage
  },
  {
    path: '/contactPage',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/servicePage',
    name: 'ServicePage',
    component: ServicePage
  },
  {
    path: '/forgotPasswordPage',
    name: 'forgotPasswordPage',
    component: ForgotPasswordPage
  },
  {
    path: '/:pathMatch(.*)', // Utilisez pathMatch pour capturer toutes les routes non définies
    name: 'ErrorPage', 
    component: ErrorPage 
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
