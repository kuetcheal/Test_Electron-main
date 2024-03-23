<template>
  <div class="home-page">
    <h1>Bienvenue</h1>
    <p v-if="isAuthenticated">Bienvenue, {{ firstName }} {{ lastName }}!</p>
     <p v-else>Veuillez vous connecter pour accéder à cette page.</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  computed: {
    isAuthenticated() {
      // Vérifiez si l'utilisateur est authentifié en vérifiant s'il y a des données utilisateur dans le store Vuex
      return !!this.$store.state.user.firstName && !!this.$store.state.user.lastName;
    },
    user() {
      // Récupérez les données de l'utilisateur depuis le store Vuex
      return this.$store.state.user;
    }
  }
};
</script>

<style>
.home-page {
  text-align: center;
  padding: 20px;
}
</style>
