const quantidade = 12050.96;

const moedaBRL = valor =>{
    const options = {style:"currency",currency:"BRL"};
    return valor.toLocaleString("pt-BR",options);
};

const moedaUSD = valor =>{
    const options = {style:"currency",currency:"USD"};
    return valor.toLocaleString("en-US",options);
};

console.log("Moeda brasileira(R$): "+moedaBRL(quantidade));
console.log("Moeda americana(US$): "+moedaUSD(quantidade));