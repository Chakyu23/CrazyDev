<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Entity from '@/components/GrilleEntityCard.vue'
import Chest_show from '@/components/GrilleObjectCard.vue'

const keyPressed = ref('Aucune touche')
const StatusActive = ref('idle')
const PlayerCoord  = ref(0)
let GridJson = ''
let gridSize = 12
let grid = Array.from({ length: gridSize.value * gridSize.value }, () => ({
  type: '',
  value: '',
  hasPlayer: false
}))
let StartCoord = 0
let EndCoord = 0

GridJson = '[{"type":"Chest","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Start","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Boss","value":"","hasPlayer":false},{"type":"Boss","value":"","hasPlayer":false},{"type":"End","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Boss","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Boss","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Boss","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Boss","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Chest","value":"","hasPlayer":false},{"type":"Wall","value":"","hasPlayer":false},{"type":"Void","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false},{"type":"Mob","value":"","hasPlayer":false}]'

OpenGrid()

const handleKeyPress = (event: KeyboardEvent) => {
  keyPressed.value = event.key
  if (
    (event.key == 'ArrowUp' ||
    event.key == 'ArrowDown' ||
    event.key == 'ArrowLeft' ||
    event.key == 'ArrowRight')
    && StatusActive.value != 'Combat'
  ) {
    movePlayer(event.key)
  }
}

function movePlayer(Key) {
  let oldIndex:number = PlayerCoord.value

  switch (Key) {
    case 'ArrowUp':
      if (PlayerCoord.value > gridSize - 1 ) {
        PlayerCoord.value--
        PlayerCoord.value -= (gridSize - 1)
      }
      break
    case 'ArrowDown':
      if (PlayerCoord.value < (grid.length - gridSize)) {
        PlayerCoord.value++
        PlayerCoord.value += (gridSize - 1)
      }
      break
    case 'ArrowLeft':
      if (PlayerCoord.value > 0) {
        PlayerCoord.value--
      }
      break
    case 'ArrowRight':
      if (PlayerCoord.value < (grid.length - 1)) {
        PlayerCoord.value++
      }
      break
  }

  if (grid[PlayerCoord.value].type == 'Wall') {
    PlayerCoord.value = oldIndex
  } else if (grid[PlayerCoord.value].type == 'Boss' || grid[PlayerCoord.value].type == 'Mob') {
    StatusActive.value = "Combat"
  } else if (grid[PlayerCoord.value].type == 'Chest') {
    StatusActive.value = "Chest"
  } else {
    StatusActive.value = "void"
  }
  grid[oldIndex].hasPlayer = false
  grid[PlayerCoord.value].hasPlayer = true
}

onMounted(() => {
  // Ajoute l'écouteur d'événement au montage du composant
  window.addEventListener('keydown', handleKeyPress)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyPress)
})

function gridStyle() {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
    gap: '5px'
  }
}

function OpenGrid() {
  grid = JSON.parse(GridJson)
  for (const index in grid) {
    if (grid[index].type == 'Start') {
      grid[index].hasPlayer = true
      PlayerCoord.value = index
    }
  }
}

function startCombat() {
  StatusActive.value = 'idle'
}

</script>

<template>
  <Entity />
  <div class="container Container-Grid">
    <!-- Grille générée dynamiquement-->
    <button v-if="StatusActive=='Combat'" @click="startCombat()">Lancer le combat</button>
    <div class="grid" :style="gridStyle()">
      <div v-for="(cell, index) in grid" :key="index" class="cell">
        <!-- Si un pion est présent dans la cellule, on l'affiche -->
        <span v-if="cell.hasPlayer">♟️</span>
        <span v-else-if="cell.type == 'Mob'">👾</span>
        <span v-else-if="cell.type == 'Boss'">💀</span>
        <span v-else-if="cell.type == 'Wall'">🧱</span>
        <span v-else-if="cell.type == 'Start'">🚪</span>
        <span v-else-if="cell.type == 'End'">🏁</span>
        <span v-else-if="cell.type == 'Chest'">💰</span>
      </div>
    </div>
  </div>

  <Entity v-if="StatusActive=='Combat'" />
  <Chest_show v-else-if="StatusActive=='Chest'" />
</template>

<style scoped>
.container {
  width: 250px;
}
.Container-Grid {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 800px;
  height: 700px;
  justify-items: center;
}

.grid {
  margin: 20px;
  max-width: 700px;
  max-height: 700px;
}
.cell {
  width: 45px;
  aspect-ratio: 1/1;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid #ccc;
}
.cell:hover {
  background-color: #ddd;
}

</style>
