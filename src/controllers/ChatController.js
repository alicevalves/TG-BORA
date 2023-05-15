const Chat = require('../models/Chat');

// firebase.initializeApp(firebaseConfig);

class ChatController {
    static async setmensagens(req, res) {
        const data = req.body;
        await Chat.setmensagens(data);
        res.status(201).send({msg: "Evento criado com sucesso!"});
        
    }

    static async getmensagembyId(req, res) {
        const { idusuario} = req.params;
        const resp = await Chat.getmensagembyId(idusuario);
        if (resp.msg) {
            return res.status(401).send({msg: resp.msg});
        } else{
            return res.status(200).send(resp);
        }
    }
}
module.exports = ChatController;