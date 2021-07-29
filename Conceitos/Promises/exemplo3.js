//Apenas de exemplo

var promise = Promise.resolve(3)
var promise2 = Promise.resolve(4)
var primise3 = Promise.resolve(4)


//Espera por todas as promises retornarem os resultados
// e então (.then) executa oq precisa
Promisse.all([promise, promise2, promise3])
    .then(function(values){

    })


//O primeiro a retornar terá o .then executado
//com os dados retornados
Promisse.race([promise, promise2, promise3])
    .then(function(values){

})

