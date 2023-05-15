const firebase = require('firebase');

// firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Mensagens = db.collection('mensagens');

class Chat {
  static async setmensagens(data) {
    await Mensagens.add(data);
  }
  static async getmensagembyId(idusuario) {
    const origem = await Mensagens.where('idUsuario', '==', idusuario).get();
    const destino = await Mensagens.where('idUsuDestino', '==', idusuario).get();
    if (origem.empty && destino.empty) {
        return {msg: "Mensagens não localizadas!"};
    }
    const msg = []
    origem.forEach(doc => {
        msg.push(doc.data());
    });
    destino.forEach(doc => {
        msg.push(doc.data());
    });
    // ordena pelo campo dataHoraEnvio
    return msg.sort(function (obj1, obj2) {
    return obj1.dataHoraEnvio < obj2.dataHoraEnvio ? -1 :
    (obj1.dataHoraEnvio > obj2.dataHoraEnvio ? 1 : 0);
    });
  }

}


module.exports = Chat;