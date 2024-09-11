<script setup lang="ts">
  import {ref} from "vue";
  const gridSize = defineModel()
  const click = ref(0)
  let grid = []

  gridSize.value = 12

  createGrid()

  function gridStyle() {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize.value}, 1fr)`,
      gridTemplateRows: `repeat(${gridSize.value}, 1fr)`,
      gap: '5px'
    };
  }

  function createGrid() {
    grid = Array.from({ length: gridSize.value * gridSize.value }, () => ({
      type: "Void",
      value: "",
      isStart: false,
      isEnd: false,
      hasPlayer: false
    }));
  }

  function placeThing(index, Type, Value) {
    if (Type == 'player') {
      this.grid[index].hasPlayer = true
    }
    click.value++ // Toggle le pion
  }
</script>

<template>
  <div class="container grid-container">
    <p>{{ click }}</p>
    <!-- Grille générée dynamiquement -->
    <div class="grid" :style="gridStyle()">
      <div v-for="(cell, index) in grid" :key="index" class="cell" @click="placeThing(index, 'player', '')">
        <!-- Si un pion est présent dans la cellule, on l'affiche -->
        <span v-if="cell.hasPlayer">♟️</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  width: 80%;
  display: flex;
  flex-direction: column;

}

.grid {
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  margin: auto;
}
.cell {
  width: 100%;
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