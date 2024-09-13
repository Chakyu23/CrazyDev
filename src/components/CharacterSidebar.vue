<script setup lang="ts">
import CharacterCreation from './CharacterCreation.vue'
import CharacterList from './CharacterList.vue'
</script>

<template>
  <aside class="sidebar">
    <CharacterCreation />
    <div class="spacer"></div>
    <!-- Espace entre CharacterCreation et CharacterList -->
    <CharacterList />
    <button class="play-button">Play</button>
  </aside>
</template>

<style scoped>
.sidebar {
  height: 94vh; /* Prend toute la hauteur de la page */
  background-color: #836464;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribue l'espace entre les éléments */
}

.play-button {
  padding: 10px 20px;
  background-color: #c70039;
  width: 200px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
