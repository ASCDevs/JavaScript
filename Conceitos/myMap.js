//Criando a própria função de map();
//conceito de programação funcional;
//callback = função que é passada por outra função;

let s = [23,65,98,5];

//Permite criar a função myMap no escopo do objeto Array com o prototype;
Array.prototype.myMap = function(callback){ 
    let novoArray = []; 

    //this nos da acesso ao objeto que estamos chamando;
    for(let i=0;i<this.length;i++){
        novoArray.push(callback(this[i]));
    }

    return novoArray;
};

let new_s = s.myMap(function(item){
    return item * 2;
});

console.log(new_s);