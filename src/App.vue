<script setup lang="ts">
  import { ref } from 'vue';
  import { useCharacterStore } from './stores/CharacterStore.ts';
</script>

<template>
  <HomeBar></HomeBar>
  <div class="container">
    <main>
      <div class="adventures">
        <button class="adventure">Aventure 1</button>
        <button class="adventure" disabled>Aventure 2 (à venir)</button>
        <button class="adventure" disabled>Aventure 3 (à venir)</button>
      </div>
      <aside class="sidebar">
        <div class="create-character">
          <h2>Création de perso</h2>
          <input v-model="newCharacter" placeholder="Nom du perso" />
          <button @click="addCharacter">Ajouter</button>
        </div>
        <div class="character-list">
          <h2>Liste perso</h2>
          <ul>
            <li v-for="character in characters" :key="character">{{ character }}</li>
          </ul>
        </div>
        <button class="play-button">Play</button>
      </aside>
    </main>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh; /* Assure que le conteneur prend toute la hauteur de la page */
  }

  main {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 80vh; /* Assure que le main prend toute la hauteur du conteneur */
  }

</style>