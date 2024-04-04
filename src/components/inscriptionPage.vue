<template>
  <div class="registration-form">
    <h1>Inscription</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="firstName">Prénom</label>
        <input type="text" id="firstName" v-model="firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Nom</label>
        <input type="text" id="lastName" v-model="lastName" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">S'inscrire</button>
      <p> vous avez déjà un compte, veuillez vous connecter ici. <router-link to="/">Se connecter</router-link></p>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';


export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  },
  methods: {
     ...mapMutations(['setUser']),

   async registerUser() {
      // Validation des champs et envoi des données au serveur
      if (!this.firstName || !this.lastName || !this.email || !this.password) {
        alert('Tous les champs sont obligatoires');
        return;
      }
      
      // Appeler la mutation `setUser` pour mettre à jour l'état avec les données de l'utilisateur
      this.setUser({
        firstName: this.firstName,
        lastName: this.lastName,
           email: this.email, 
        password: this.password
      });


      // Vous pouvez envoyer les données au serveur pour l'enregistrement
      // console.log('Données d\'inscription :', {
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   email: this.email,
      //   password: this.password
      // });
      
      // Réinitialiser les champs après soumission
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';

        this.$router.push('/homePage');
    },

   
  }
};
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
