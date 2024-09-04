<template>
  <nav>
    <div class="entete">
      <div class="logo-container">
    <div class="logo-text">
      <h2>MOBILIIS</h2>
      <p>Votre voyage garantie</p>
    </div>
  </div>
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
      <!-- <li><div class="dropdown">
          <button class="dropbtn">EasyTravel</button><el-icon><ArrowDownBold /></el-icon>
          <div class="dropdown-content">
            <a href="#" >Nos offres</a>
            <a href="#">Nos partenaires</a>
            <a href="#" >nous découvrir</a>
          </div>
          </div></li> -->
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contactPage">Contact</a></li>
      <li><a href="/inscriptionPage">Inscription</a></li>
      <li><a href="/connexionPage">Connexion</a></li>
    </ul></div>
    <div class="outil">
    <img src="@/assets/OIP.jpg" alt="Outil" class="outil-image" />
  </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import { ArrowDownBold,  } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';

export default {
   components: {
    ElIcon,
    ArrowDownBold
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


.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.logo-text{
  position: relative;
  right: 25px;
}
.logo-text h2 {
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: #91c451; /* Couleur verte */
  font-size: 30px; /* Taille du texte APLINET */
}

.logo-text p {
  font-family: 'Arial', sans-serif;
  font-size: 16px; /* Taille du texte en dessous */
  color: #91c451; /* Même couleur verte */
  margin-top: -10px;
}

.outil-image {
  width: 60px; /* Vous pouvez ajuster la taille selon vos besoins */
  height: 60px; /* Vous pouvez ajuster la taille selon vos besoins */
  object-fit: cover; /* Ajuste l'image pour qu'elle rentre dans la boîte sans la déformer */
  margin-left: 65px;
  margin-top: 35px;
  border-radius: 50%; /* Ajoute l'effet circulaire */
  cursor: pointer;
}

nav {
  background-color: #026f02; /* Couleur de fond verte */
  padding: 10px;
}
.menu ul li a {
  color: white;
  font-size: 17px;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 15px;
  transition: background-color 0.3s ease;
}
.menu ul li a:hover {
  background-color: #1aa721; /* Couleur de fond hover plus claire */
}
.menu{
  margin-top: 30px;
}
</style>
