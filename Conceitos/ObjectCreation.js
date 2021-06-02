//Object Literal
const microfoneLiteral = {
    color: "black",
    taLigado: true,
    trocarOnOff: function(){
        taLigado = !taLigado;
        let status = taLigado? "Ligado": "Desligado";
        console.log("Microfone: "+status);
    }
};


function testeLiteral(){
    console.log("<< Teste com Object Literal >> ");

    console.log(microfoneLiteral.color);
    microfone.color = "Blue";
    console.log(microfoneLiteral.color);
    microfoneLiteral.trocarOnOff();
    microfoneLiteral.trocarOnOff();
    microfoneLiteral.trocarOnOff();

    console.log("\n")
}

//Factory
function createMicrofone(color = "black"){
    let taLigado = true;

    function trocarOnOff(){
        taLigado = !taLigado;
        let status = taLigado? "Ligado": "Desligado";
        console.log("Microfone: "+status);
    }

    //Irá retornar apenas atributos visíveis para fora
    return { color, trocarOnOff }
}

function testeFactory(){
    console.log("<< Teste com factory >> ");
    let microfoneBlack = createMicrofone();
    let microfoneWhite = createMicrofone("White");

    console.log(microfoneBlack.color);
    console.log(microfoneWhite.color);

    console.log(microfoneBlack.taLigado);
    console.log(microfoneWhite.taLigado);

    microfoneBlack.trocarOnOff();
    microfoneBlack.trocarOnOff();
    microfoneBlack.trocarOnOff();

    microfoneWhite.trocarOnOff();
    microfoneWhite.trocarOnOff();
    microfoneWhite.trocarOnOff();

    console.log("\n")
}

//Prototype
function Microfone(color = "black"){
    this.color = color;
    this.isOn = true;
}

Microfone.prototype.trocarOnOff = ()=>{
    this.isOn = !this.isOn;
    let status = this.isOn? "Ligado": "Desligado";
    console.log("Microfone: "+status);
}

const microfoneProt = new Microfone();
const microfoneProt2 = new Microfone("Branco");

function testePrototype(){
    console.log("<< Teste com Prototype >> ");

    console.log(microfoneProt);
    console.log(microfoneProt2);

    microfoneProt.trocarOnOff();
    microfoneProt.trocarOnOff();
    microfoneProt.trocarOnOff();

    microfoneProt2.trocarOnOff();
    microfoneProt2.trocarOnOff();
    microfoneProt2.trocarOnOff();

    console.log("\n");
}

//Class
//Não se iguala a orientação a objetos
//Funciona da mesma forma que o Prototype
//apenas melhora visualmente a sintaxe de escrita
class MicrofoneClasse{

    constructor(color = "black"){
        this.color = color;
        this.isOn = true;
    }

    trocarOnOff(){
        this.isOn = !this.isOn;
        let status = this.isOn? "Ligado": "Desligado";
        console.log("Microfone: "+status);
    }
}


let microfoneClass = new MicrofoneClasse();


function testeClass(){
    console.log("<< Teste com Class >>");

    console.log(microfoneClass);
    microfoneClass.trocarOnOff();
    microfoneClass.trocarOnOff();
    microfoneClass.trocarOnOff();


    console.log("\n");
}

//TESTES
let testarObLiteral = true;
let testarFactory = true;
let testarPrototype = true;
let testarClass = true;

if(testarObLiteral){
    testeLiteral();
}

if(testarFactory){
    testeFactory();
}

if(testarPrototype){
    testePrototype();
}

if(testarClass){
    testeClass();
}