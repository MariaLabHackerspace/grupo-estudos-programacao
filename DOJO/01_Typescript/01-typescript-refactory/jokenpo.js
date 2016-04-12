var JokenPo;
(function (JokenPo) {
    JokenPo[JokenPo["Pedra"] = 1] = "Pedra";
    JokenPo[JokenPo["Papel"] = 2] = "Papel";
    JokenPo[JokenPo["Tesoura"] = 3] = "Tesoura";
})(JokenPo || (JokenPo = {}));
var resultado;
function Jogar(jogadaUsuario) {
    var ganhador = Resultado(JokenPo[jogadaUsuario], SorteioJogadaMaquina());
    return ganhador;
}
function SorteioJogadaMaquina() {
    return Math.floor((Math.random() * 3) + 1);
}
function Resultado(jogadaUsuario, jogadaMaquina) {
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
