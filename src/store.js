
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {
      firstName: null,
      lastName: null,
      password: null
    }
  },
  
  
  mutations: {
    setUser (state, user) {
      state.user.firstName = user.firstName;
      state.user.lastName = user.lastName;
      state.user.password = user.password;
    },
    // ...
  },
  actions: {
    login ({ commit }, { firstName, lastName, password, router }) {
      // Simuler une authentification avec un service externe
      // ...

      // En cas de succès, stocker les informations utilisateur
      commit('setUser', {
        firstName,
        lastName,
        password
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
