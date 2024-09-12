<template>
  <div class="create-character">
    <h2>Création de perso</h2>
    <button @click="addCharacter">Ajouter</button>
  </div>
</template>

<script setup lang="ts">
const addCharacter = () => {
  // Logique pour ajouter un personnage
}
</script>

<style scoped>
.create-character {
  flex: 0 0 20%; /* Prend 20% de la hauteur de son conteneur parent */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre le contenu verticalement */
  background-color: #e0e0e0; /* Couleur de fond */
  padding: 10px;
  border-radius: 8px; /* Bordures arrondies */
  margin-bottom: 15px; /* Augmente l'espace entre CharacterCreation et CharacterList */
}

button {
  width: 180px;
  cursor: pointer;
}
</style>
