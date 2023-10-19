// knexfile.js
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'votre_nom_utilisateur',
      password: 'votre_mot_de_passe',
      database: 'votre_base_de_donnees'
    },
    migrations: {
      directory: './migrations' // Le répertoire où seront stockées les migrations
    }
  },
  // ... d'autres configurations pour d'autres environnements (production, test, etc.)
};