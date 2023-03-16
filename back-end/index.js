const express = require('express')
const cors = require('cors')
const firebase = require('firebase')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhWgYcNDsodel8HZgfdBEcsyCIel3CV14",
    authDomain: "bora-103cc.firebaseapp.com",
    databaseURL: "https://bora-103cc-default-rtdb.firebaseio.com",
    projectId: "bora-103cc",
    storageBucket: "bora-103cc.appspot.com",
    messagingSenderId: "155887568657",
    appId: "1:155887568657:web:e4320884e7cbb3d32eaeb0",
    measurementId: "G-VT0BRPJQLK"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const Usuario = db.collection('usuarios');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({msg: "Teste"});
})
app.post('/setusuarios', async (req, res) => {
    const data = req.body;
    await Usuario.add(data);
    
    res.status(201).send({msg: "Usuário criado com sucesso!"});
})

app.get('/getusuarios', async (req, res) => {
    const snapshot = await Usuario.get();
    const usuarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    res.send(usuarios);
})

app.get('/getusuariosbyId', async (req, res) => {
    const snapshot = await Usuario.get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
    res.send(usuarios);
})
app.listen(3000, () => {
    console.log("Aplicação executando na porta 30000");
})
