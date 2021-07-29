const parametroValido = "parametro1"

function verificaEntradaCallback(callback, errorCallback){
    return new Promise((resolve,reject)=>{
        if(parametroValido != "parametro1" && parametroValido != "parametro2"){
            reject({
                name: "Parametro rejeitado",
                message: "Mensagem para parametro rejeitado"
            })
        }else{
            resolve({
                name: parametroValido,
                message: "O Parâmetro está correto"
            })
        }
    })
}

verificaEntradaCallback()
    .then((result)=>{
        console.log(result.name +" - " + result.message)
    }).catch((error)=>{
        console.log(error.name + " - " + error.message)
    })