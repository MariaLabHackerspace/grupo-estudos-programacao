**Príncipios S.O.L.I.D.**

**S - Princípio de Responsabilidade Única**

- Único motivo para alterá-la
- Não possuir várias responsabilidades
- Pode ser utilizado em métodos
- Complexidade ciclomática
- Coesão e estabilidade
- Evitar code smells, acomplamento
     Exemplos: Muitos IFs


**O - Princípio de Aberto-Fechado**

- Aberto para extensão e fechado para modificação
- Herança e Polimorfismo
- Abstração
- Feature Envy  
Exemplos: http://eduardopires.net.br/2013/05/open-closed-principle-ocp/      


**L - Princípio da Substituição de Liskov**

- Utilização de herança, composição
- Restrições de entrada e saída
    Entrada menos restritiva que a classe base
    Saída mais restritiva que a classe base
- Classes filhas devem respeitar o contrato da classe base  
Exemplos: http://ntakashi.net/lsp/


**I - Princípio de Segregação de Interface**

- Evitar interfaces "gordas"
    Melhor possuir interfaces menores e específicas (SRP)
- Interfaces mais coesas
- Classes não devem depender de métodos que não são utilizados


**D - Princípio da Inversão de Dependência**

- Classe deve depender de uma classe mais estável do que ela mesmo
- Acoplamento seguro
- Injenção de Dependência ter parâmetros no construtor, porta de entrada para classe concreta
- Inversão de Controle/Dependência: depende da abstração para não depender de uma classe concreta



