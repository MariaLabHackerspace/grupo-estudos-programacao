"use strict";
var Laranja = (function () {
    function Laranja() {
    }
    Laranja.prototype.Jogar = function (jogada) {
        this.Resultado(1, this.Sorteio());
    };
    Laranja.prototype.Sorteio = function () {
        return Math.floor((Math.random() * 3) + 1);
    };
    Laranja.prototype.Resultado = function (usuario, maquina) {
        switch ((usuario - maquina)) {
            case 0:
                return 'Empate!';
            case 1:
                return 'usuario ganhou';
            case 2:
                return 'maquina ganhou';
            case -1:
                return 'maquina ganhou';
            case -2:
                return 'usuario ganhou';
            default:
                return 'lerolero';
        }
    };
    return Laranja;
}());
module.exports = Laranja;
