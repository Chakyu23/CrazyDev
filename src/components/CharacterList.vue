<template>
    <div class="character-list">
      <h2>Liste perso</h2>
      <ul>
        <li v-for="character in characters" :key="character">{{ character }}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const characters = ref<string[]>(['Perso 1', 'Perso 2']); // Exemple de personnages
  </script>
  
  <style scoped>
    .character-list {
      flex: 1; /* Prend tout l'espace disponible */
      overflow-y: auto; /* Ajoute un défilement vertical si nécessaire */
      background-color: #f4f4f4; /* Couleur de fond */
      padding: 10px;
      border-radius: 8px; /* Bordures arrondies */
      margin-bottom: 15px;
    }
  </style>