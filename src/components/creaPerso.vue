<template>
  <HomeBar />
  <main>
    <div class="character-creation-card">
      <div class="character-image">Image</div>
      <div class="character-info">
        <div class="attribute">
          <label for="name">Nom</label>
          <input type="text" id="name" name="name" v-model="character.name">
        </div>
        <div class="attribute">
          <label for="attack">Attaque</label>
          <input type="number" id="attack" name="attack" v-model.number="character.attack" @input="updateRemainingPoints" :min="-25" :max="124">
        </div>
        <div class="attribute">
          <label for="dodge">Esquive</label>
          <input type="number" id="dodge" name="dodge" v-model.number="character.dodge" @input="updateRemainingPoints" :min="-25" :max="124">
        </div>
        <div class="attribute">
          <label for="defense">Défense</label>
          <input type="number" id="defense" name="defense" v-model.number="character.defense" @input="updateRemainingPoints" :min="-25" :max="124">
        </div>
        <div class="attribute">
          <label for="hp">PV</label>
          <input type="number" id="hp" name="hp" v-model.number="character.hp" @input="updateRemainingPoints" :min="1" :max="125">
        </div>
        <div class="points">Il vous reste {{ remainingPoints }} points à attribuer</div>

        <!-- Bouton Valider -->
        <div class="button-container">
          <button class="validate-button" :disabled="remainingPoints !== 0" @click="createCharacter">Valider</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const totalBasePoints = ref(25); // Points de base à attribuer
    const remainingPoints = ref(25);
    const character = ref({
      name: '',
      attack: 0,
      dodge: 0,
      defense: 0,
      hp: 1 // Les PV doivent commencer à 1 ou plus
    });

    const updateRemainingPoints = () => {
      // Récupère les valeurs ou considère comme 0 si vide (ou 1 pour les PV)
      const { attack, dodge, defense, hp } = character.value;

      // Limite chaque statistique à un minimum de -25 et un maximum spécifique pour PV et les autres stats
      character.value.attack = Math.max(Math.min(attack, 124), -25);
      character.value.dodge = Math.max(Math.min(dodge, 124), -25);
      character.value.defense = Math.max(Math.min(defense, 124), -25);
      character.value.hp = Math.max(Math.min(hp, 125), 1); // Les PV doivent être compris entre 1 et 125

      // Calcule le total des points positifs et négatifs
      const totalPositivePoints = 
        (character.value.attack > 0 ? character.value.attack : 0) +
        (character.value.dodge > 0 ? character.value.dodge : 0) +
        (character.value.defense > 0 ? character.value.defense : 0) +
        (character.value.hp > 0 ? character.value.hp : 0); // On inclut les PV dans le calcul

      const totalNegativePoints = 
        (character.value.attack < 0 ? Math.abs(character.value.attack) : 0) +
        (character.value.dodge < 0 ? Math.abs(character.value.dodge) : 0) +
        (character.value.defense < 0 ? Math.abs(character.value.defense) : 0) +
        (character.value.hp < 0 ? Math.abs(character.value.hp) : 0); // Les PV ne devraient jamais être négatifs

      // Calcul des points restants
      remainingPoints.value = totalBasePoints.value - totalPositivePoints + totalNegativePoints;
    };

    const createCharacter = async () => {
      try {
        const response = await axios.post('http://localhost:3000/create-character', {
          nom: character.value.name,
          att: character.value.attack,
          def: character.value.defense,
          esq: character.value.dodge,
          pv: character.value.hp,
          type: 'Joueur' // Comme précisé, nous ne créons que des Joueurs pour l'instant
        });
        console.log('Personnage créé avec succès:', response.data);
        alert('Personnage créé avec succès!');
      } catch (error) {
        console.error('Erreur lors de la création du personnage:', error);
        alert('Erreur lors de la création du personnage.');
      }
    };

    return {
      remainingPoints,
      character,
      updateRemainingPoints,
      createCharacter
    };
  }
});
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

.character-creation-card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 800px; /* Limite la taille maximale de la carte */
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ff5733;
}

.character-image {
  width: 300px;
  height: 300px;
  background-color: red;
  margin-right: 20px;
}

.character-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.attribute {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.attribute label {
  margin-right: 10px;
  width: 90px;
}

.attribute input {
  flex: 1;
}

.points {
  margin-top: 20px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.validate-button {
  padding: 10px 20px;
  background-color: #c70039;
  width: 140px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.validate-button:hover {
  background-color: #a50031;
}

.validate-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
