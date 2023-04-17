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

const Mensagens = db.collection('mensagens');

export default class ChatController {
    static async setmensagens(req, res) {
        const data = req.body;
        await Mensagens.add(data);
        
        res.status(201).send({msg: "Mensagem criada com sucesso!"});
    }

    static async getmensagembyId(req, res) {
        const { idusuario} = req.params;
        const origem = await Mensagens.where('idUsuario', '==', idusuario).get();
        const destino = await Mensagens.where('idUsuDestino', '==', idusuario).get();
        if (origem.empty && destino.empty) {
            res.status(404).send({msg: "Mensagens não localizadas!"});
            return;
        }
        const msg = []
        origem.forEach(doc => {
            msg.push(doc.data());
        });
        destino.forEach(doc => {
            msg.push(doc.data());
        });
        // ordena pelo campo dataHoraEnvio
        msg.sort(function (obj1, obj2) {
        return obj1.dataHoraEnvio < obj2.dataHoraEnvio ? -1 :
        (obj1.dataHoraEnvio > obj2.dataHoraEnvio ? 1 : 0);
        });
        res.status(200).send(msg);
    }
}