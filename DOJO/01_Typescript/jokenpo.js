var JokenPo;
(function (JokenPo) {
    JokenPo[JokenPo["Pedra"] = 1] = "Pedra";
    JokenPo[JokenPo["Papel"] = 2] = "Papel";
    JokenPo[JokenPo["Tesoura"] = 3] = "Tesoura";
})(JokenPo || (JokenPo = {}));
function Jogar(jogada) {
    Resultado(JokenPo[jogada], Sorteio());
}
function Sorteio() {
    return Math.floor((Math.random() * 3) + 1);
}
function Resultado(usuario, maquina) {
    switch ((usuario - maquina)) {
        case 0:
            console.log("Empate!");
            break;
        case 1:
            console.log("usuario ganhou");
            break;
        case 2:
            console.log("maquina ganhou");
            break;
        case -1:
            console.log("maquina ganhou");
            break;
        case -2:
            console.log("usuario ganhou");
            break;
        default:
            break;
    }
}
