<template>
  <div class="adventures-container">
    <div class="adventures">
      <button class="adventure">Aventure 1</button>
      <button class="adventure" disabled>Aventure 2 (à venir)</button>
      <button class="adventure" disabled>Aventure 3 (à venir)</button>
    </div>
  </div>
</template>

<style scoped>
  .adventures-container {
    background-image: url('/path/to/your/image.jpg'); /* Remplace par le chemin de ton image */
    background-size: cover;
    background-color: aqua;
    background-position: center;
    height: 100vh;
    width: 130vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .adventures {
    text-align: center;
  }

  .adventure {
    display: block;
    margin: 10px 0;
    padding: 15px;
    background-color: red;
    color: white;
    border: none;
    width: 200px;
  }
</style>