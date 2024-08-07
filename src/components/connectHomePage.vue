<template>
  <div class="home-page">
    <ConnectNavbar />

    <!-- Navigation -->
    <nav>
      <router-link to='/'>Accueil</router-link>
      <router-link to='/contact'>Contact</router-link>
      <router-link to='/service'>Nos services</router-link>
    </nav>

    <p>Bonjour {{ rendu }}</p>
    <p>la grande famille vous dire  {{ getJacques }}</p>
    <p>et à  {{ getJohn }}</p>

    <div v-if="getUserData">
      <p>Bonjour {{ getUserData.firstName }} {{ getUserData.lastName }}</p>
      <p>Email: {{ getUserData.email }}</p>
      <!-- Vous pouvez afficher d'autres données de l'utilisateur ici -->
    </div>

    <!-- Vue Router -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ConnectNavbar from '../components/connectNavbar.vue';


export default {
  name: 'HomePage',
  components: {
   ConnectNavbar // Déclarer le composant AppNavbar
  },
  data () {
    return {
      rendu: this.$store.state.Marcel
    }
  },
  computed: {
    ...mapGetters(['getJacques', 'getJohn', 'getUserData']),
    userData() {
      return this.getUserData;
    }
  }
}
</script>

<style>
/* Styles CSS pour la page HomePage.vue */
.home-page {
  text-align: center;
}

.logo {
  width: 100px; /* Ajustez la taille selon vos besoins */
  height: auto;
  margin-bottom: 20px;
}

.icons {
  margin-top: 20px;
}

.icon {
  margin-right: 20px;
  font-size: 24px;
}

.notification-icon:before {
  content: '\1F514'; /* Unicode pour une icône de notification, ajustez selon votre choix */
}

.cart-icon:before {
  content: '\1F6D2'; /* Unicode pour une icône de panier, ajustez selon votre choix */
}

.profile-icon:before {
  content: '\1F464'; /* Unicode pour une icône de profil, ajustez selon votre choix */
}

nav {
  margin-top: 20px;
}

nav a {
  margin-right: 10px;
  color: #333; /* Couleur du texte */
  text-decoration: none;
}

nav a:hover {
  color: #007bff; /* Couleur du texte au survol */
}
</style>
