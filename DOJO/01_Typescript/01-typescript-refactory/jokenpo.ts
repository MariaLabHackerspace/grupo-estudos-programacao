enum JokenPo {
    Pedra = 1,
    Papel,
    Tesoura
}

var resultado: string;

function Jogar(jogadaUsuario: string): string {
    var ganhador: string = Resultado(JokenPo[jogadaUsuario], SorteioJogadaMaquina());
    return ganhador;
}

function SorteioJogadaMaquina(): JokenPo {
    return Math.floor((Math.random() * 3) + 1);
}

function Resultado(jogadaUsuario: JokenPo, jogadaMaquina: JokenPo): string {
    if (jogadaUsuario == JokenPo.Pedra && jogadaMaquina == JokenPo.Pedra
        || jogadaUsuario == JokenPo.Papel && jogadaMaquina == JokenPo.Papel
        || jogadaUsuario == JokenPo.Tesoura && jogadaMaquina == JokenPo.Tesoura)
        resultado = 'Temos um empate';

    else if (jogadaUsuario == JokenPo.Pedra && jogadaMaquina == JokenPo.Papel
        || jogadaUsuario == JokenPo.Papel && jogadaMaquina == JokenPo.Tesoura
        || jogadaUsuario == JokenPo.Tesoura && jogadaMaquina == JokenPo.Pedra)
        resultado = 'Máquina vencedora';

    else if (jogadaUsuario == JokenPo.Pedra && jogadaMaquina == JokenPo.Tesoura
        || jogadaUsuario == JokenPo.Papel && jogadaMaquina == JokenPo.Pedra
        || jogadaUsuario == JokenPo.Tesoura && jogadaMaquina == JokenPo.Papel)
        resultado = 'Usuário vencedor';

    return resultado;
}
