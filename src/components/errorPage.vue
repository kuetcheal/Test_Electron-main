<template>
    <div class="error-page">
      <h1>Oops! quelque chose ne fonctionne.</h1>
      <p>nous ne pouvons pas touver cette page que vous chercher.</p>
      <router-link to="/">Aller à la page d'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorPage',
  }
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    margin-top: 100px;
  }
  
  .error-page h1 {
    font-size: 2.5rem;
    color: #ff6347; /* Tomato color */
  }
  
  .error-page p {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
  
  .error-page a {
    color: #42b983;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  