<script setup lang="ts">
import { ref } from 'vue'

const isLoggedIn = ref(false)

const Token_name = 'Token-CrazyDevRpg'

function GetToken() {
  let value = `; ${document.cookie}`
  let parts = value.split(`; ${Token_name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

function SetToken(value, days) {
  let expires = ''
  if (days) {
    let date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = Token_name + '=' + (value || '') + expires + '; path=/'
}

function handleAuth() {
  isLoggedIn.value = isLoggedIn.value == false
}

function DelToken() {
  document.cookie = Token_name + '=; Max-Age=-99999999;'
}
</script>

<template>
  <header class="main-header">
    <div class="logo">
      <!-- Utilise une image ou un texte pour le logo -->
      <img src="@/assets/logo.webp" alt="Logo du site" />
    </div>
    <div class="site-title">
      <h1>Dark Ultimate RPG</h1>
    </div>
    <div class="auth-actions">
      <button @click="handleAuth">{{ isLoggedIn ? 'Déconnexion' : 'Connexion' }}</button>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
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
  font-family: Handjet, sans-serif;
}

.auth-actions {
  width: 120px;
}
</style>
