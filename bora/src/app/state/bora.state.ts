export class BoraState {
    login: LoginState = {} as LoginState
}

export interface LoginState {
  idusuario: string;
}

export interface cadastro {
  nome: string;
  email: string;
  senha: string;
  linkedin: string;
  fotoPerfil: string;
}

export interface evento{
    descricaoEvento: string
    nomeEvento: string
    localEvento: string
    dataEvento: string
    idusuario: string
}

export interface mensagemEnviada {
    mensagem: string
    dataHoraEnvio: string
    idUsuarioDestino: string
    idUsuario: string
}
