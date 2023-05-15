const Eventos = require('../models/Eventos');

class EventosController {
    static async seteventos(req, res) {
        const data = req.body;
        
        await Eventos.seteventos(data);
        res.status(201).send({msg: "Evento criado com sucesso!"});
    }

    static async geteventos(req, res) {    
        const eventos = await Eventos.geteventos();
        res.send(eventos);
    }
}

module.exports = EventosController;