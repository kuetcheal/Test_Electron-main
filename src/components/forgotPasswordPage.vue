<template>
  <div class="forgot-password-form">
    <h1>Mot de Passe Oublié</h1>
    <form @submit.prevent="onSubmit">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
      <button type="submit"> réinitialiser</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'forgotPasswordPage',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async onSubmit() {
      const userData = {
        email: this.email
      };

      try {
        const response = await fetch('http://127.0.0.1:8000/api/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        if (!response.ok) {
          throw new Error('Erreur lors de l\'envoi de l\'email de réinitialisation');
        }
        alert('Un email de réinitialisation a été envoyé');
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

<style scoped>
.forgot-password-form {
  max-width: 400px;
  margin: auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"] {
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
