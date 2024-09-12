<template>
  <HomeBar />
  <main>
    <div class="character-creation-card">
      <div class="character-image">
        <img :src="character.image" alt="Character Image" v-if="character.image">
        <div v-else>Image</div>
      </div>
      <div class="character-info">
        <div class="attribute">
          <label for="nom">Nom</label>
          <input type="text" id="nom" name="nom" v-model="character.nom">
        </div>
        <div class="attribute">
          <label for="att">Attaque</label>
          <input type="number" id="att" name="att" v-model.number="character.att" @input="updateRemainingPoints" :min="-25" :max="124">
        </div>
        <div class="attribute">
          <label for="esq">Esquive</label>
          <input type="number" id="esq" name="esq" v-model.number="character.esq" @input="updateRemainingPoints" :min="-25" :max="124">
        </div>
        <div class="attribute">
          <label for="def">Défense</label>
          <input type="number" id="def" name="def" v-model.number="character.def" @input="updateRemainingPoints" :min="-25" :max="124">
        </div>
        <div class="attribute">
          <label for="pv">PV</label>
          <input type="number" id="pv" name="pv" v-model.number="character.pv" @input="updateRemainingPoints" :min="1" :max="125">
        </div>
        <div class="attribute">
          <label for="image">Image URL</label>
          <input type="text" id="image" name="image" v-model="character.image">
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
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      totalBasePoints: 25, // Points de base à attribuer
      remainingPoints: 25,
      character: {
        nom: '', // Correspond au champ 'nom' en base de données
        att: 0,  // Correspond au champ 'att' en base de données
        esq: 0,  // Correspond au champ 'esq' en base de données
        def: 0,  // Correspond au champ 'def' en base de données
        pv: 1,   // Correspond au champ 'pv' en base de données
        image: '' // Correspond au champ 'image' en base de données
      }
    };
  },
  methods: {
    updateRemainingPoints() {
      // Récupère les valeurs ou considère comme 0 si vide (ou 1 pour les PV)
      const att = this.character.att || 0;
      const esq = this.character.esq || 0;
      const def = this.character.def || 0;
      const pv = this.character.pv || 1; // Les PV ne peuvent pas être inférieurs à 1

      // Limite chaque statistique à un minimum de -25 et un maximum spécifique pour PV et les autres stats
      this.character.att = Math.max(Math.min(att, 124), -25);
      this.character.esq = Math.max(Math.min(esq, 124), -25);
      this.character.def = Math.max(Math.min(def, 124), -25);
      this.character.pv = Math.max(Math.min(pv, 125), 1); // Les PV doivent être compris entre 1 et 125

      // Calcule le total des points positifs et négatifs
      const totalPositivePoints = 
        (this.character.att > 0 ? this.character.att : 0) +
        (this.character.esq > 0 ? this.character.esq : 0) +
        (this.character.def > 0 ? this.character.def : 0) +
        (this.character.pv > 0 ? this.character.pv : 0); // On inclut les PV dans le calcul

      const totalNegativePoints = 
        (this.character.att < 0 ? Math.abs(this.character.att) : 0) +
        (this.character.esq < 0 ? Math.abs(this.character.esq) : 0) +
        (this.character.def < 0 ? Math.abs(this.character.def) : 0) +
        (this.character.pv < 0 ? Math.abs(this.character.pv) : 0); // Les PV ne devraient jamais être négatifs

      // Calcul des points restants
      this.remainingPoints = this.totalBasePoints - totalPositivePoints + totalNegativePoints;
    },
    async createCharacter() {
  try {
    console.log('Données du personnage avant l\'envoi :', this.character);

    const response = await axios.post('http://localhost:3000/create-character', this.character);
    alert('Personnage créé avec succès !');
    console.log(response.data);
  } catch (error) {
    console.error('Erreur lors de la création du personnage :', error.response ? error.response.data : error.message);
    alert('Erreur lors de la création du personnage.');
  }
}
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

.character-image img {
  max-width: 100%;
  height: auto;
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
