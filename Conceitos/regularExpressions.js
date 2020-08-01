//Regular expressions

//.test()
let frase = "Um prato de trigo para três tigres tristes";
let regExp = /prato/;
let result = regExp.test(frase)
console.log("Palavra \"prato\": "+result)
regExp = /carro|bus|escola/;
result = regExp.test(frase);
console.log("Palavra carro, bus ou escola: "+result)
frase = "FreeCodeCamp e frases camelCase";
regExp = /freecodecamp|camelcase/i; //Considera palavras mesmo com camelCase
result = regExp.test(frase)
console.log("Teste camelCase: "+ result)


//.match()

console.log("Hello, World!".match(/Hello/));
frase = "Regular expressions";
regExp = /expressions/;
console.log("Saída: "+frase.match(regExp))

frase = "Repetida, Repetida, Repetida, Repetida";
regExp = /Repetida/g; //irá pegar todas as Strings que forem repetidas
console.log(frase.match(regExp))

frase = "REPETIDA, Repetida, REPETIDA, Repetida"
regExp = /repetida/gi; //todas as strings repetidas e ser fazer distinção camelCase
console.log(frase.match(regExp))

//Caracter curinga - Wildcard  '.'
//usado para encontrar palavras com semelhança com caractes
//por exemplo palavras com erro ortográfico
frase = "Eu vou cantarolar um som";
regExp  = /cant./
console.log("Saída: "+regExp.test(frase))

//Encontrando caracters únicos com múltiplas possibilidades

//Ex: encontrar palavras apenas com "a", "e" e "i" no meio

regExp = /b[aiu]g/;
frase = "big"
console.log("Saída: "+frase.match(regExp))
frase = "bag"
console.log("Saída: "+frase.match(regExp))
frase = "bug"
console.log("Saída: "+frase.match(regExp))
frase = "bog"
console.log("Saída: "+frase.match(regExp))

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // retornará as vogais sem distinção de camelCase
result = quoteSample.match(vowelRegex);
console.log(result)

//Todas as letras da frase
quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; //Irá retornar todas as letras de a-z
result = quoteSample.match(alphabetRegex); 
console.log(result);

//Encontrando letras e números
frase = "Blueberry 3.141592653s are delicious.";
regExp = /[h-s2-6]/gi; //retorna todas as letras entre "h" e "s" no alfabeto e números entre 2 e 6
console.log("Saída: "+frase.match(regExp))

//caracteres que não queremos encontrar
//   /[^caractes não desejáveis]/ig;
frase = " 121232 estrelas foram vistas ontem"
regExp =/[^0-9aeiou]/ig; //identifica todos os caracteres não desejáveis
console.log("Saída: "+ frase.match(regExp))//Saida de caractes q não se encontram no regExp

//Encontrando caracteres seguidos em uma linha
frase = "Mississippi";
regExp = /s+/g;
console.log("Saída: "+frase.match(regExp)) 

console.log(/\w/.test(frase))
console.log(frase.match(/\w/g))



