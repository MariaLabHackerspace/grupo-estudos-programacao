##Singleton

Para projeto com poucas instâncias, uma única instancia é feita.  
Contras: gera uma dependencia muito grande, e geralmente é feito por classe bem tipada  
Prós: ele simplifica o acesso a mesma instancia, garante consistência  
O método getInstance() geralmente indetifica o uso do padrão

Exemplo: [fonte Paulo Collares](http://www.paulocollares.com.br/2012/08/exemplo-do-padrao-de-projeto-singleton-o-forever-alone-do-desing-patterns/)

<code>
public class Configuracao {

    private static Configuracao instancia;

    private String ip;
    private int porta;
    private String usuario;
    private String senha;

    private Configuracao(){
    }

    public static Configuracao getInstancia(){
        if (instancia==null){
            instancia=new Configuracao();
        }
        return instancia;
    }

    public void autenticar(){
    }

    /*
     * getters e setters e outros métodos
     */

}
</code>
