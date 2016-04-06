enum JokenPo {
  Pedra = 1,
  Papel,
  Tesoura
}

function Jogar(jogada:string) {
    
    Resultado(JokenPo[jogada], Sorteio());
    
}

function Sorteio() {
   return Math.floor((Math.random() * 3) + 1);    
}

function Resultado(usuario:number, maquina:number) {

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

