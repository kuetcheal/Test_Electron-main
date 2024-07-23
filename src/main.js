import { createApp } from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store'; 
import ElementPlus from 'element-plus';
import VueCookieLaw from 'vue-cookie-law';
import 'element-plus/dist/index.css';
import router from './components/router';
import connexion from './components/connexionPage.vue';
import homePage from './components/homePage.vue';
import contactPage from './components/contactPage.vue';
import forgotPasswordPage from './components/forgotPasswordPage.vue';

createApp(App)
  .use(Vuex)
  .use(store)
  .use(router)
  .use(VueCookieLaw)
  .use(ElementPlus)
  .component('connexion', connexion)
  .component('forgotPasswordPage', forgotPasswordPage)
  .component('homePage', homePage)
  .component('contactPage', contactPage)
  .mount('#app');
