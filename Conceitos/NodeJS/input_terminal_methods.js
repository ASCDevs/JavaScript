//Fonte: https://www.codecademy.com/articles/getting-user-input-in-node-js
//Método 1 - Readline Object
/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual Seu Nome ?\n> ", nome => {
    console.log(`Olá ${nome}!`);
    readline.close();
});*/

//Método 2 - Módulo prompt-sync
//Necessita primeiramente instalar
//npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true});
const nome = prompt('Qual o seu nome?\n> ');
console.log(`Olá, ${nome}!`);

