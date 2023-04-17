const { default: UsuariosController } = require('./Controller/UsuariosController');
const express = require('express');
const cors = require('cors');
const { default: EventosController } = require('./Controller/EventosController');
const { default: ChatController } = require('./Controller/ChatController');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({msg: "Teste"});
})

app.post('/setusuarios', UsuariosController.setusuarios);
app.put('/putusuarios/:idusuario', UsuariosController.putusuarios);
app.put('/alteraSenha', UsuariosController.alteraSenha);
app.get('/getusuarios', UsuariosController.getusuarios);
app.get('/login', UsuariosController.login);
app.get('/getusuariosbyId/:idusuario', UsuariosController.getusuariosbyId);

// Eventos
app.post('/seteventos', EventosController.seteventos);

app.get('/geteventos', EventosController.geteventos);
// Chat
app.post('/setmensagens', ChatController.setmensagens);

app.get('/getmensagembyId/:idusuario', ChatController.getmensagembyId);


app.listen(3000, () => {
    console.log("Aplicação executando na porta 3000");
})
