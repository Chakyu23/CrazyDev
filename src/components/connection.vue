<template>
  <div class="container">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">pseudo</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">mot de passe</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="button-container">
        <button type="submit">connection</button>
      </div>
    </form>
    <p>Vous n'avez pas de compte ?</p>
    <div class="button-container">
      <button @click="handleSignUp">inscrivez-vous</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          pseudo: this.username,
          mdp: this.password
        });

        // Si la connexion est réussie, définir le cookie
        if (response.data.token) {
          document.cookie = `Token-CrazyDevRpg=${response.data.token}; path=/;`;
          alert('Connexion réussie !');
          // Rediriger ou mettre à jour l'interface en conséquence
        } else {
          alert('Pseudo ou mot de passe incorrect.');
        }
      } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        alert('Erreur lors de la connexion.');
      }
    },
    handleSignUp() {
      // Rediriger vers la page d'inscription ou gérer l'inscription ici
    }
  }
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