<script setup lang="ts">
import Adventures from './components/Adventures.vue'
import CharacterCreation from './components/CharacterCreation.vue'
import CharacterList from './components/CharacterList.vue'
import CharacterSidebar from './components/CharacterSidebar.vue'
import connection from './components/connection.vue'
import creaPerso from './components/creaPerso.vue'
import HomeBar from './components/HomeBar.vue'
import Grille from '@/components/GrilleComponent.vue'

</script>

<template>
  <HomeBar />
    <main>
      <connection />
      <!--<Adventures />
      <CharacterSidebar />-->
      <!--<creaPerso />-->
    </main>
</template>

<!--<style scoped>
  main {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }
</style>-->

