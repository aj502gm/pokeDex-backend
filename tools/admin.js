var admin = require("firebase-admin");

var serviceAccount = require("../pokedex-137c5-firebase-adminsdk-ze4g6-e37260b06e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };