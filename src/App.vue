<template>
  <div>
    <header class="header">
      <img class="header-logo" src="/images/logo_tchoukball.jpg" alt="Tchoukball Logo">
      <p class="header-slogan">Pour les fanatiques de Tchoukball</p>
    </header>
    <main-nav />
    <RouterView />
    <footer class="footer">
      <div class="footer-links">
        <router-link to="/mentions-legales">Mentions légales</router-link>
        <router-link to="/politique-confidentialite">Politique de confidentialité</router-link>
        <router-link to="/coordonnees">Coordonnées de la Fédération</router-link>
      </div>
      <div class="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <p>&copy; Le pied de page</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MainNav from './components/Nav.vue';
</script>

<style scoped>
/* Your existing styles */

.header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-logo {
  width: 200px; /* Increase the width for 2x size */
}

.header-title {
  margin: 0;
  font-size: 1.5rem;
}

.header-slogan {
  margin: 0;
  font-size: 1rem;
  color: #ccc;
}

.footer {
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
}

.footer a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}

.footer a:hover {
  color: #ccc;
}

.footer-links {
  margin-bottom: 1rem;
}

.social-links {
  margin-top: 1rem;
}
</style>
