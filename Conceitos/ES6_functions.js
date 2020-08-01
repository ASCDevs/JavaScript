const data = function(){
	return new Date();
}

let nome = (name) => "Hello i'm "+name;

let mult = (n1,n2) =>{
	return 3*9;
}

const dobro = num => num*2;
const concatenar = (arr1,arr2)=> arr1.concat(arr2);

//Valores padrão, para parâmetros vazios
const padrao = (nome = "Anonymous") => "Hello "+nome;

//rest functions, funções que recebem n parametros e retornam em array
function quantos(...parametros){
	return "Você colocou "+parametros.length+ "parametros"
}

//operador spread ...args
const ar1 = [1,2,3,4,5]
let ar2;
ar2 = [...ar1];

console.log(ar2)
console.log(data())
console.log(nome("Alexandre"))
console.log(mult(3,9))
console.log(dobro(6))
console.log(concatenar([1,2],[3,4,5]))
console.log(padrao("Juliana"))
console.log(padrao())
console.log(quantos(1,2,4,"Alexandre"))
console.log(quantos())
console.log(quantos("String",true,null,12,"outr"))


//Desestruturação atribuições de objetos
const pessoa = {
	NOME:"Alexandre",
	altura:1.70,
	idade:21,
	gosta:["programação","ler","filmes","animes","hamburguerias","esfihas"]
};

const {NOME,altura,idade,gosta}= pessoa;
const {NOME: cidadao, idade: age, gosta: likes} = pessoa;
console.log(NOME," - ",altura," - ",gosta)
console.log(cidadao," - ",age," - ",likes)


//SWAP 
let a=10,b=7;
console.log("Antes - A: ",a,", B: ",b);
[b,a]=[a,b];
console.log("Depois - A: ",a,", B: ",b);


//Template literal
//usar sinal de cráse = `
//posso dar espaço nas linhas sem utilizar o \n
const saudacao = `Olá, meu nome é ${pessoa.NOME}! 
Estou aprendendo JavaScript aos ${pessoa.idade} anos.`;
console.log(saudacao)