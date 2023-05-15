const express = require('express');
const cors = require('cors');
const firebase = require('firebase');
const firebaseConfig  = require('./config/database');
const UsuariosController = require('./controllers/UsuariosController');
const EventosController = require('./controllers/EventosController');
const ChatController = require('./controllers/ChatController');
const app = express();
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.text({ limit: '200mb' }));
app.use(cors());

app.get('/', (req, res) => {
    res.send({msg: "Teste"});
})
// firebase.initializeApp(firebaseConfig);
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
