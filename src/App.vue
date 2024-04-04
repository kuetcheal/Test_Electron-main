
 <template>
  <div id="app">
     <HomePage v-if="isLoggedIn" />
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { createApp, computed } from 'vue';
import App from './App.vue';
import router from './components/router.js';
import store from './store.js';
import HomePage from './components/homePage.vue';

// Utilisez le store Vuex dans votre application
const app = createApp(App);

// Utilisez le store Vuex dans votre application
app.use(store);
app.use(router);

app.mount('#app');

export default {
  name: 'App',
   components: { HomePage },
  router,
  store,
  setup() {
    const isLoggedIn = computed(() => store.state.isLoggedIn);
    return { isLoggedIn };
  }
};
</script>


<style>
/* Votre style global ici */
</style>



