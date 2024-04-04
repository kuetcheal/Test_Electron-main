<template>
  <div class="login-form">
    <h1>Connexion</h1>
    <form @submit.prevent="onSubmit">
      <label for="firstName">Prénom</label>
      <input type="text" id="firstName" v-model="firstName" required>
      <label for="lastName">Nom</label>
      <input type="text" id="lastName" v-model="lastName" required>
      <label for="password">Mot de passe</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Se connecter</button>
    </form>
    <p>Si vous n'avez pas de compte, veuillez vous inscrire ici. <router-link to="/inscriptionPage">S'inscrire</router-link></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'connexionPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      password: ''
    };
  },
  computed: {
  ...mapGetters(['getUserData']),
    },

  methods: {
    onSubmit() {
         const userData = this.getUserData;

      // Vérifiez les informations d'identification
     if (userData.firstName === this.firstName && userData.lastName === this.lastName && userData.password === this.password) {
    // Rediriger vers la page d'accueil après la connexion réussie
    this.$router.push('/servicePage');
  } else {
    // Afficher un message d'erreur si les informations d'identification sont incorrectes
    alert('Informations d\'identification incorrectes');
  }
    }
  }
};
</script>



<style src="./connexion.css"></style>
