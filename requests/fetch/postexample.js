function makePost(){
    let dados = {
        "categ_name": document.getElementById("campo-categoria").value
    }

    let url = "https://localhost:44328/categorias/addorupdate";
    let request = {
        method: "POST",
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    }

    fetch(url,request)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            document.getElementById("resultado").innerHTML = data.result;
        });
}

function alerta(){
    alert("Clicado");
}