
let num = 0;

function configs(){
    
}

function addOne(){
    num+=1;
    document.getElementById('qtd_itens').innerHTML = num;
    document.title = "Shopping Cart ("+num+")";
}

function removeOne(){
    if(num===1){
        num-=1;
        document.getElementById('qtd_itens').innerHTML = num;
        document.title = "Shopping Cart";
    }
    if(num>1){
        num-=1;
        document.getElementById('qtd_itens').innerHTML = num;
        document.title = "Shopping Cart ("+num+")";
    }
}

function openCart(){
    document.getElementById("cart").style.display = "block";
    document.getElementById("cart").style.display = "flex";

}

function closeCart(){
    document.getElementById("cart").style.display = "none";
}