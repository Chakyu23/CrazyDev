<template>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="username">pseudo</label>
          <input type="text" id="username" required>
        </div>
        <div class="form-group">
          <label for="password">mot de passe</label>
          <input type="password" id="password" required>
        </div>
        <div class="button-container">
          <button type="submit">connection</button>
        </div>
      </form>
      <p>Vous n'avez pas de compte ?</p>
      <div class="button-container">
        <button>inscrivez vous</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage'
  };
  </script>
  
  <style scoped>
    .container {
      width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #900C3F;
    }
  
    .form-group {
      margin-bottom: 15px;
    }
  
    .form-group label {
      display: block;
      margin-bottom: 5px;
      color: white; /* Couleur du texte en blanc */
    }
  
    .form-group input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
  
    .button-container {
      text-align: center;
    }
  
    button {
      padding: 10px 20px;
      background-color: #c70039;
      width: 140px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #a5002e;
    }
  
    p {
      text-align: center;
      color: white; /* Couleur du texte en blanc */
    }
  
    p button {
      background: none;
      border: none;
      color: white; /* Couleur du bouton en blanc */
      cursor: pointer;
      text-decoration: underline;
    }
  
    p button:hover {
      color: #e0e0e0; /* Couleur plus claire au survol */
    }
  </style>