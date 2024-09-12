import express from 'express';
import mysql from 'mysql2/promise'; // Utilise mysql2 avec les promesses
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // Déplacez ceci ici pour activer CORS pour toutes les routes

// Créer une connexion à la base de données avec pool
const pool = mysql.createPool({
  host: 'mysql-chakyu23.alwaysdata.net',
  user: 'chakyu23_xanes',
  password: 'aV6qc.BJKxYs3AU', // Remplace par ton mot de passe
  database: 'chakyu23_crazydev',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Route pour créer un personnage
app.post('/create-character', async (req, res) => {
  const { nom, att, def, esq, pv, image } = req.body;
  
  console.log('Données reçues:', { nom, att, def, esq, pv, image });

  // Vérifie que tous les champs nécessaires sont présents
  if (!nom || !att || !def || !esq || !pv || !image) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    const [results] = await pool.query(
      'INSERT INTO combattant (nom, att, def, esq, pv, type, image, score) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [nom, att, def, esq, pv, 'Joueur', image || null, 0]
    );
    res.status(201).json({ id: results.insertId, nom, att, def, esq, pv, type: 'Joueur', image: image || null, score: 0 });
  } catch (error) {
    console.error('Erreur lors de la création du personnage:', error);
    res.status(500).json({ error: 'Erreur lors de la création du personnage.' });
  }
});

// Démarrer le serveur
app.listen(3000, () => console.log('Server running on port 3000'));