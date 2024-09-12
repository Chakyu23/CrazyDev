<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoggedIn = ref(false);
const Token_name = "Token-CrazyDevRpg";

// Fonction pour obtenir le token depuis les cookies
function GetToken() {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${Token_name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}

// Fonction pour vérifier si un token est présent
function checkAuth() {
  const token = GetToken();
  isLoggedIn.value = !!token; // Si un token est présent, l'utilisateur est connecté
}

// Fonction pour définir un token dans les cookies
function SetToken(value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = Token_name + "=" + (value || "") + expires + "; path=/";
}

// Fonction pour supprimer le token (déconnexion)
function DelToken() {
  document.cookie = Token_name + "=; Max-Age=-99999999; path=/";
  isLoggedIn.value = false;
}

// Vérification de l'authentification au chargement
onMounted(() => {
  checkAuth();
});

// Fonction de gestion du clic sur le bouton
function handleAuth() {
  if (isLoggedIn.value) {
    DelToken(); // Déconnexion
  } else {
    // Rediriger vers la page de connexion (à implémenter selon votre projet)
    window.location.href = "/login";
  }
}
</script>

<template>
  <header class="main-header">
    <div class="logo">
      <img src="@/assets/logo.webp" alt="Logo du site" />
    </div>
    <div class="site-title">
      <h1>Dark Ultimate RPG</h1>
    </div>
    <div class="auth-actions">
      <button @click="handleAuth">
        {{ isLoggedIn ? 'Déconnexion' : 'Connexion' }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -10px;
  margin-left: -8px;
  margin-bottom: 10px;
  padding: 5px 8px;
  background-color: #581845;
  color: white;
}

.logo img {
  height: 80px;
  border-radius: 50%;
}

.site-title h1 {
  margin: 0;
  font-size: 80px;
  font-weight: 500;
  font-family: Handjet,sans-serif;
}

.auth-actions {
  width: 120px;
}
</style>