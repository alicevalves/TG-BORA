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

const Usuario = db.collection('usuarios');

export default class UsuariosController {
    static async setusuarios(req, res) {
        const data = req.body;
        const auth = firebase.auth();
        
        auth.createUserWithEmailAndPassword(data.email, data.senha)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            data['idUsuario'] = user.uid;
            delete(data['senha']);
            await Usuario.add(data);
            res.status(201).send({msg: "Usuário criado com sucesso!"});
        })
        .catch((error) => {
            let errorMessage;
            const mensagemerro = error.message;
            if (mensagemerro.includes("The email address is already")) {
                errorMessage = "Esse e-mail já está sendo utilizado em outra conta!"
            }
            if (mensagemerro.includes("Password should be at least 6 character")) {
                errorMessage = "A senha deve ter pelo menos 6 caracteres!"
            }
            res.status(401).send({msg: errorMessage});
        });
    }

    static async putusuarios(req, res) {
        const data = req.body;
        const { idusuario} = req.params;
        const auth = firebase.auth();
        await auth.signInWithEmailAndPassword(data.email, data.oldSenha);
        auth.currentUser.updatePassword(data.senha)
        .then(async (userCredential) => {
            // Signed in
            const snapshot = await Usuario.where('idUsuario', '==', idusuario).get();
            if (snapshot.empty) {
                res.status(404).send({msg: "Usuário não localizado!"});
                return;
            }
            
            let id;
            snapshot.forEach(doc => {
                id = doc.id;
            });
            const userRef = Usuario.doc(id);
            await userRef.update(data)

            res.status(201).send({msg: "Usuário alterado com sucesso!"});
        })
        .catch((error) => {
            let errorMessage;
            const mensagemerro = error.code;
            if (mensagemerro.includes("auth/weak-password")) {
                errorMessage = "A senha deve ter pelo menos 6 caracteres!"
            }
            res.status(401).send({msg: errorMessage || erro.message});
        });  
    }

    static async alteraSenha(req, res) {
        const data = req.body;
        const auth = firebase.auth();
        auth.sendPasswordResetEmail(data.email)
        .then(() => {
            res.status(201).send({msg: "E-mail de redefinição de senha enviado!"});
        })
        .catch((error) => {
            let errorMessage;
            const mensagemerro = error.code;
            if (mensagemerro.includes("auth/invalid-email")) {
                errorMessage = "O formato do e-mail enviado está incorreto!"
            }
            if (mensagemerro.includes("auth/user-not-found")) {
                errorMessage = "Não há registro de usuário correspondente a este e-mail!"
            }
            res.status(404).send({msg: errorMessage});
        });  
    }

    static async getusuarios(req, res) {
        const snapshot = await Usuario.get();
        const usuarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        res.send(usuarios);
    }

    static async login(req, res) {
        const data = req.body;
        const auth = firebase.auth();
        
        auth.signInWithEmailAndPassword(data.email, data.senha)
        .then((userCredential) => {
            const user = userCredential.user;
            res.status(200).send({idusuario: user.uid});
        })
        .catch((error) => {
            let errorMessage;
            const mensagemerro = error.code;
            
            if (mensagemerro.includes("auth/wrong-password")) {
                errorMessage = "A senha é inválida ou o usuário não possui senha!";
            }
            res.status(404).send({msg: errorMessage});
        });  
    }

    static async getusuariosbyId(req, res) {
        const { idusuario} = req.params;
        const snapshot = await Usuario.where('idUsuario', '==', idusuario).get();
        if (snapshot.empty) {
            res.status(404).send({msg: "Usuário não localizado!"});
            return;
        }
        
        const myArray = []
        snapshot.forEach(doc => {
            myArray.push(doc.data());
        });
        res.status(200).send(myArray);
    }
}