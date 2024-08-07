<template>
  <nav>
    <div class="entete">
    <div class="logo"> <img src="@/assets/logo.png" alt="Logo de l'application" class="logo"></div>
   <div class="menu"><ul>
      <li><a href="/">Accueil</a></li>
      <li>
    <div class="dropdown">
      <a href="#" class="dropbtn">Nos services</a><el-icon><ArrowDownBold /></el-icon>
      <div class="dropdown-content">
        <a href="#">Caution bancaire (AVI)</a>
        <a href="#">Assurance voyage</a>
        <a href="#">Logement Etudiant</a>
        <a href="#">Remboursement caution</a>
        <a href="#">Frais scolarité</a>
      </div>
    </div>
  </li>
      <li><div class="dropdown">
          <button class="dropbtn">EasyTravel</button><el-icon><ArrowDownBold /></el-icon>
          <div class="dropdown-content">
            <a href="#" >Nos offres</a>
            <a href="#">Nos partenaires</a>
            <a href="#" >nous découvrir</a>
          </div>
          </div></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/inscriptionPage">Inscription</a></li>
      <li><a href="/connexionPage">Connexion</a></li>
    </ul></div>
    <div class="outil">
      <el-icon><Bell /></el-icon>
    </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import { ArrowDownBold, Bell } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';

export default {
   components: {
    ElIcon,
    ArrowDownBold,
    Bell
  },
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
  /* position: relative; */
}

.dropbtn {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-decoration: none;
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

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.entete{
  display: flex;
  gap: 80px;
  margin-left: 100px;
  
}

</style>
