import { defineStore } from 'pinia';
import axios from 'axios';

export const useCharacterStore = defineStore('characterStore', {
  state: () => ({
    characters: [] as Array<any>,  // Remplace `any` par le type approprié
    message: ''
  }),
  actions: {
    async createCharacter(characterData: { nom: string, att: number, def: number, esq: number, pv: number, type: string }) {
      try {
        const response = await axios.post('http://your-api-url/characters', characterData);
        this.characters.push(response.data);
        this.message = 'Personnage créé avec succès !';
      } catch (error) {
        console.error('Erreur lors de la création du personnage:', error);
        this.message = 'Erreur lors de la création du personnage.';
      }
    }
  }
});