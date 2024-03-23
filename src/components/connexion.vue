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
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  inject: ['$router'], // Injecter l'instance du routeur
  data () {
    return {
      firstName: '',
      lastName: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      // Valider les données saisies
      if (!this.firstName || !this.lastName || !this.password) {
        alert('Tous les champs sont obligatoires');
        return;
      }

      // Envoyer les données à l'action Vuex pour la connexion
      this.$store.dispatch('login', {
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password
      });

      // Rediriger vers la page d'accueil
      this.$router.push({ name: 'homePage' }); // Utiliser le routeur injecté

      // Réinitialiser les champs du formulaire
      this.firstName = '';
      this.lastName = '';
      this.password = '';
    }
  }
};
</script>

<style src="./connexion.css"></style>
