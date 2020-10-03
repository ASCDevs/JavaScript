
function exibeAlgo(){
    console.log("Hello!");
}

function exibeApos5s(){
    console.log("Deu cinco segundos!")
}
//A função exibeAlgo foi chamada sem () pois ao fazer isso já estariamos executando
//A cada 1 Segundo é executado a função

setInterval(exibeAlgo, 1000);

//Irá executar a função uma vez após 5 segundos
setTimeout(exibeApos5s, 5000); 

