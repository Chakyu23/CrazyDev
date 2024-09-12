<template>
    <HomeBar />
    <div class="container">
      <main>
        <div class="character-creation-card">
          <div class="character-image">Image</div>
          <div class="character-info">
            <div class="attribute">
              <label for="name">Nom</label>
              <input type="text" id="name" name="name">
            </div>
            <div class="attribute">
              <label for="attack">Attaque</label>
              <input type="number" id="attack" name="attack">
            </div>
            <div class="attribute">
              <label for="dodge">Esquive</label>
              <input type="number" id="dodge" name="dodge">
            </div>
            <div class="attribute">
              <label for="defense">Défense</label>
              <input type="number" id="defense" name="defense">
            </div>
            <div class="attribute">
              <label for="hp">PV</label>
              <input type="number" id="hp" name="hp">
            </div>
            <div class="points">Vous avez 25 points à attribuer</div>
  
            <!-- Bouton Valider -->
            <div class="button-container">
              <button class="validate-button">Valider</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
}

main {
  display: flex;
  justify-content: center;
  width: 60%;
  height: 60vh;
}

.character-creation-card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
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

/* Container pour positionner le bouton en bas à droite */
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

/* Style du bouton Valider */
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
</style>