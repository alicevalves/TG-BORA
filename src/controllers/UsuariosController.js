const firebase = require('firebase');
const firebaseConfig  = require('../config/database');

firebase.initializeApp(firebaseConfig);

const Usuarios = require('../models/Usuarios');

class UsuariosController {
    
    static async setusuarios(req, res) {
        const data = req.body;
        const resp = await Usuarios.setusuarios(data);
        if (resp == 'OK') {
            return res.status(201).send({msg: "Usuário criado com sucesso!"});
        } else{
            return res.status(401).send({msg: resp});
        }
    }

    static async putusuarios(req, res) {
        const data = req.body;
        const { idusuario} = req.params;
        const resp = await Usuarios.putusuarios(data, idusuario);
        if (resp == 'OK') {
            return res.status(201).send({msg: "Usuário alterado com sucesso!"});
        } else{
            return res.status(401).send({msg: resp});
        }
    }

    static async alteraSenha(req, res) {
        const data = req.body;
        const resp = await Usuarios.alteraSenha(data);
        if (resp == 'OK') {
            return res.status(201).send({msg: "E-mail de redefinição de senha enviado!"});
        } else{
            return res.status(401).send({msg: resp});
        }
    }
    
    static async getusuarios(req, res) {
        const resp = await Usuarios.getusuarios();
        res.send(resp);
    }
    
    static async login(req, res) {
        const data = req.body;
        const resp = await Usuarios.login(data);
        if (resp.msg) {
            return res.status(401).send({msg: resp.msg});
        } else{
            return res.status(200).send({idUsuario: resp.idUsuario});
        }
    }

    static async getusuariosbyId(req, res) {
        const { idusuario} = req.params;
        const resp = await Usuarios.getusuariosbyId(idusuario);
        if (resp.msg) {
            return res.status(401).send({msg: resp.msg});
        } else{
            return res.status(200).send(resp);
        }
    }   
}

module.exports = UsuariosController;