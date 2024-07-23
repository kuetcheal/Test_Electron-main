<template>
  <div class="registration-form">
    <h1>Inscription</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Prénom</label>
        <input type="text" id="username" v-model="username" required>
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
      <p>Vous avez déjà un compte, veuillez vous connecter ici. <router-link to="/">Se connecter</router-link></p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      lastName: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        // Envoyer les données au serveur Symfony
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          username: this.username,
          password: this.password,
          lastName: this.lastName,
          email: this.email
        });

        if (response.status === 201) {
          alert('Inscription réussie !');
          this.$router.push('/homePage');
        }
      } catch (error) {
        console.error('Erreur lors de l\'inscription', error);
        alert('Une erreur est survenue lors de l\'inscription.');
      }

      // Réinitialiser les champs après soumission
      this.username = '';
      this.lastName = '';
      this.email = '';
      this.password = '';
    }
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
