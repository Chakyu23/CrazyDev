<script setup lang="ts">
import Adventures from './components/Adventures.vue';
import CharacterSidebar from './components/CharacterSidebar.vue';
import HomeBar from './components/HomeBar.vue';
</script>

<template>
  <HomeBar />
  <div class="container">
    <main>
      <Adventures />
      <CharacterSidebar />
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