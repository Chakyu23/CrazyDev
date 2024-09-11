<template>
  <div class="adventures-container">
    <div class="adventures-list">
      <button>Aventure 1</button>
      <button disabled>Aventure 2 (à venir)</button>
      <button disabled>Aventure 3 (à venir)</button>
    </div>
  </div>
</template>

<style scoped>
  .adventures-container {
    background-color: #ff5733; /* Remplace par le chemin de ton image */
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 130vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .adventures-list {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  button {
    width: 380px;
  }

</style>