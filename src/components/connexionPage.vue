<template>
  <div class="login-form">
    <h1>Connexion</h1>
    <form @submit.prevent="onSubmit">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Mot de passe</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Se connecter</button>
    </form>
    <p>Si vous n'avez pas de compte, veuillez vous inscrire ici. <router-link to="/inscriptionPage">S'inscrire</router-link></p>
    <p><router-link to="/forgotPasswordPage">Mot de passe oublié?</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'connexionPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async onSubmit() {
      const userData = {
        email: this.email,
        password: this.password
      };

      try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        if (!response.ok) {
          throw new Error('Informations d\'identification incorrectes');
        }
        this.$router.push('/servicePage');
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
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
