import { createApp } from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store'; 
import router from './components/router';
import connexion from './components/connexion.vue';
import homePage from './components/homePage.vue';


createApp(App)
  .use(Vuex)
  .use(store)
  .use(router)
  .component('connexion', connexion)
  .component('homePage', homePage)
  .mount('#app');


const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Créer la fenêtre du navigateur
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // Charger l'application VueJS
  win.loadURL('http://localhost:8080/')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})