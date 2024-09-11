<script setup lang="ts">
import Adventures from './components/Adventures.vue';
import CharacterSidebar from './components/CharacterSidebar.vue';
import HomeBar from './components/HomeBar.vue';
import creaPerso from './components/creaPerso.vue';
import connection from './components/connection.vue';
</script>

<template>
  <HomeBar />
  <div class="container">
    <main>
      <connection />
    </main>
  </div>
</template>

