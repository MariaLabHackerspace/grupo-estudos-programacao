# Nomes significativos

http://blog.goyello.com/2013/05/17/express-names-in-code-bad-vs-clean/

### Names have to reveal your intentions:
```
int d;  
// elapsed time in days  
int ds;  
int dsm;  
int faid;  
```
```
int elapseTimeInDays;  
int daysSinceCreation;  
int daysSinceModification;  
int fileAgeInDays;  
```

### Evite informações erradas
```
int a = 1;
if(O == 1)
	a=Ol;
else
	l=01;
```


### Faça Distinções Significativas
```
getActiveAccount(); -> =
getActiveAccounts(); -> getAllAccounts();
getActiveAccountInfo(); -> account.status
```

### Use nomes pronunciáveis
```
class DtaRcrd102 {
	private Date genymdhms
}

class Customer{
	private Date generationTimestamp;
}
```


** Cuidado com Palavras reservadas;

** Classes css
```
.lightBlue{}
->
.primary{}
```

### Evite Codificações
```
public sysCode001l
public erro002
```
### A notação húngara
```
public string phoneString;
getListAccounts();

public string phone;
getAllAccounts();
```

### Prefixos de variáveis Membro
```
private string m_descricao;
void setName(string descricao){
	m_descricao = descricao;
}
->
private string descricao;
void setName(string descricao){
	this.descricao = descricao;
}
```

### Interfaces e Implementações //pesquisar
```
IPessoa
PessoaImp
CShapeFactory**
```

### Evite o mapeamento mental
```
variáveis com 1 letra
r = "url";
->
url = "www.123.com.br";
```

### Nomes de Classes
```
evite -> Gerenciar, Processador, Dados, Info
devem ser substantivos -> Custumers, Accounts
```

### Nomes de Métodos
```
devem ter verbos -> getName();
mesma idioma do projeto;
nomes de metodos utilizados em testes bem verboso;
```

### Não dê uma de espertinho
não fazer "gracinhas" no código;  

Selecione uma Palavra por conceito e Não faça trocadilhos  

controller e manager. escolha um destes, e mantenha o comportamento em todas as classes.  

Use nome a partir do domínio da solução  

não utilize -> AccountVisitor (o que é visitor no contexto?)   
Utilizar nomes técnicos -> JobQueue  


### Adicione um contexto significativo
```
evite "state"
-> address.state
```

### Não adicione contextos desnecessários
exemplo:  
```
app: Gas Station Deluxe  
GDSController()


function ler(isAlgumaCoisa)

simEhLer=true;
ler(simEhLer = true);
```


### Criar constantes

> Propriedades que armazenam métodos : nomes devem ser o que vão fazer ou o que retornam?
