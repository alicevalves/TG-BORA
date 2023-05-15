const firebase = require('firebase');

// firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Evento = db.collection('eventos');

class Eventos {
  static async seteventos(data) {
    await Evento.add(data);
  }
  static async geteventos() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    
    const dataFormatada = `${ano}-${mes}-${dia}`;
    const snapshot = await Evento.where('dataEvento', '>', dataFormatada).orderBy('dataEvento').get();

    // const snapshot = await query.get();
    return await snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

}


module.exports = Eventos;