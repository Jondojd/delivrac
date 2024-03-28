 index.js

// Importer les modules nécessaires
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Créer une instance d'application Express
const app = express();

// Configurer le middleware pour analyser les données de formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Configurer le serveur pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Définir les routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'menu.html'));
});

app.post('/order', (req, res) => {
  // Traiter les données de commande
  const { items, address, phone } = req.body;
  // Enregistrer la commande dans la base de données ou envoyer un email
  console.log('Nouvelle commande :', { items, address, phone });
  res.redirect('/confirmation');
});

app.get('/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'confirmation.html'));
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
})
