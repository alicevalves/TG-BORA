const firebase = require('firebase');

const db = firebase.firestore();
const Usuario = db.collection('usuarios');

class Usuarios {
  static async setusuarios(data) {
    const auth = firebase.auth();

    auth
      .createUserWithEmailAndPassword(data.email, data.senha)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        data["idUsuario"] = user.uid;
        delete data["senha"];
        await Usuario.add(data);
        return 'OK';
      })
      .catch((error) => {
        let errorMessage;
        const mensagemerro = error.message;
        if (mensagemerro.includes("The email address is already")) {
          errorMessage = "Esse e-mail já está sendo utilizado em outra conta!";
        }
        if (mensagemerro.includes("Password should be at least 6 character")) {
          errorMessage = "A senha deve ter pelo menos 6 caracteres!";
        }
        return errorMessage;
      });
  }

  
  static async putusuarios(data, idusuario) {
    const auth = firebase.auth();
    await auth.signInWithEmailAndPassword(data.email, data.oldSenha);
    auth.currentUser.updatePassword(data.senha)
    .then(async () => {
        // Signed in
        
        const snapshot = await Usuario.where('idUsuario', '==', idusuario).get();
        if (snapshot.empty) {
            return "Usuário não localizado!";
        }
        
        let id;
        snapshot.forEach(doc => {
            id = doc.id;
        });
        const userRef = Usuario.doc(id);
        delete(data['senha']);
        delete(data['oldSenha']);
        await userRef.update(data);

        return "OK";
    })
    .catch((error) => {
        let errorMessage;
        const mensagemerro = error.code;
        if (mensagemerro.includes("auth/weak-password")) {
            errorMessage = "A senha deve ter pelo menos 6 caracteres!"
        }
        return errorMessage;
    });
  }

  
  static async alteraSenha(data) {
      const auth = firebase.auth();
      auth.sendPasswordResetEmail(data.email)
      .then(() => {
          return "OK";
      })
      .catch((error) => {
          let errorMessage = error.code;
          const mensagemerro = error.code;
          if (mensagemerro.includes("auth/invalid-email")) {
              errorMessage = "O formato do e-mail enviado está incorreto!"
          }
          if (mensagemerro.includes("auth/user-not-found")) {
              errorMessage = "Não há registro de usuário correspondente a este e-mail!"
          }
          return errorMessage;
      });
  }

  static async getusuarios() {
    const snapshot = await Usuario.get();
    const usuarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return usuarios;
  }


  static async login(data) {
    const auth = firebase.auth();
    
    auth.signInWithEmailAndPassword(data.email, data.senha)
    .then((userCredential) => {
        const user = userCredential.user;
        return {idUsuario: user.uid};
    })
    .catch((error) => {
        let errorMessage;
        const mensagemerro = error.code;
        
        if (mensagemerro.includes("auth/wrong-password")) {
            errorMessage = "A senha é inválida ou o usuário não possui senha!";
        }
        if (mensagemerro.includes("auth/user-not-found")) {
            errorMessage = "Usuário não encontrado!";
        }
        return {msg: errorMessage};
    });
  }

  static async getusuariosbyId(idusuario) {
    const snapshot = await Usuario.where('idUsuario', '==', idusuario).get();
    if (snapshot.empty) {
        return {msg: "Usuário não localizado!"};
    }
    
    const myArray = []
    snapshot.forEach(doc => {
        myArray.push(doc.data());
    });

    return myArray;
}   
}


module.exports = Usuarios;