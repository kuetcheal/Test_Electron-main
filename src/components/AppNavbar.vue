<template>
  <nav>
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/portfolio">Portfolio</a></li>
      <li><a href="/devis">Devis</a></li>
      <li><a href="/guide">Guide</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/inscription">Inscription</a></li>
      <li>
        <div class="dropdown">
          <button class="dropbtn">Mon Compte</button>
          <div class="dropdown-content">
            <a href="#" @click="deleteAccount">Supprimer</a>
            <a href="#">Modifier</a>
            <a href="#" @click="logout">Se Déconnecter</a>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async deleteAccount() {
      const token = localStorage.getItem('token'); // Assuming you store the token in local storage

      try {
        const response = await axios.delete('http://127.0.0.1:8000/api/delete-account', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          alert('Compte supprimé avec succès');
          // Rediriger l'utilisateur après la suppression du compte
          this.$router.push('/inscriptionPage');
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du compte', error);
        alert('Une erreur est survenue lors de la suppression du compte.');
      }
    },
    logout() {
      // Logique de déconnexion
      localStorage.removeItem('token'); // Assuming you store the token in local storage
      this.$router.push('/connexionPage');
    }
  }
};
</script>

<style>
/* Stylez votre navbar ici */
nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 20px;
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
