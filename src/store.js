
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {
      firstName: null,
      lastName: null,
      password: null,
      email: null
    },
    Marcel: 'ALEX KUETCHE',
    Jacques: 'aurevoir',
    John: 'bientot'
  },
  
  getters: {
    getJacques(state){
      return state.Jacques
    },
    getJohn(state){
      return state.John
    },
    getUserData(state) {
      return state.user;
    }
  },


  mutations: {
    setUser (state, user) {
      state.user.firstName = user.firstName;
      state.user.lastName = user.lastName;
      state.user.password = user.password;
      state.user.email = user.email;
    },
    // ...
  },
  actions: {
    login ({ commit }, { firstName, lastName, password, email, router }) {
      // Simuler une authentification avec un service externe
      // ...

      // En cas de succès, stocker les informations utilisateur
      commit('setUser', {
        firstName,
        lastName,
        password,
        email
      });

      // Rediriger vers la page d'accueil
      if (router) {
        router.push({ name: 'homePage' });
      } else {
        console.error('route non defini');
      }
    }
  }
});

export default store;
