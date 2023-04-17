const firebase = require('firebase');

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

const Eventos = db.collection('eventos');

export default class EventosController {
    static async seteventos(req, res) {
        const data = req.body;
        await Eventos.add(data);
        
        res.status(201).send({msg: "Evento criado com sucesso!"});
    }

    static async geteventos(req, res) {
        const snapshot = await Eventos.get();
        const eventos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
        res.send(eventos);
    }
}