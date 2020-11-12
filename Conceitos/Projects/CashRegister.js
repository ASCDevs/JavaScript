/*
Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second argument (cash), 
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key 
and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than 
the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for 
the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.
*/
function checkCashRegister(price, cash, cid) {
    let final = {
      status:"",
      change:[]
    };
  
    let moedas = [0.01,0.05,0.1,0.25,1,5,10,20,100];
    let troco = cash-price;
    let emCaixa = 0;
  
    for(let i=0;i<cid.length;i++){
      emCaixa+=cid[i][1];
    }
  
    if(emCaixa<troco){
      final.status = "INSUFFICIENT_FUNDS";
      return final;
    }
    
    if(emCaixa==troco){
      final.status="CLOSED";
      final.change = cid;
      return final
    }
  
    for(let x=8;x>=0;x--){
  
      if(moedas[x]<=troco){ 
        let valor=0;
        while(moedas[x]<=troco&&valor<cid[x][1]){
          
          valor+=moedas[x];
          troco=Number.parseFloat(troco-moedas[x]).toFixed(2);
          
        }
        final.change.push([cid[x][0],valor]);
      }
    }
  
    if(troco!=0){
      final.status = "INSUFFICIENT_FUNDS";
      final.change = [];
      return final;
    }
  
    final.status = "OPEN";
  
    return final;
}
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  