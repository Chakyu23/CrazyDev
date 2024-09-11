<script setup lang="ts">
  import { ref } from 'vue';
  import { useCharacterStore } from './stores/CharacterStore.ts';
</script>

<template>
  <div class="container">
    <header>
      <h1>Titre Jeux</h1>
    </header>
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
  }
  header {
    background-color: #ccc;
    padding: 20px;
    width: 100%;
    text-align: center;
  }
  main {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
  .adventures {
    flex: 1;
    text-align: center;
  }
  .adventure {
    display: block;
    margin: 10px 0;
    padding: 15px;
    background-color: red;
    color: white;
    border: none;
    width: 80%;
  }
  .sidebar {
    flex: 0.3;
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
  }
  .create-character input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
  }
  .play-button {
    display: block;
    width: 100%;
    padding: 15px;
    background-color: red;
    color: white;
    border: none;
    text-align: center;
  }
</style>
