import { defineStore } from 'pinia'

// Définir une interface pour les personnages
interface CharacterStoreState {
  characters: string[]
}

export const useCharacterStore = defineStore('characterStore', {
  state: (): CharacterStoreState => ({
    characters: ['nom perso 1', 'nom perso 2', 'nom perso 3']
  }),
  actions: {
    addCharacter(name: string) {
      this.characters.push(name)
    }
  }
})
