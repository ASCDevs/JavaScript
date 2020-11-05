/*Given a positive integer num, return the sum of all odd 
Fibonacci numbers that are less than or equal to num.*/
function sumFibs(num) {
    let antes = 0;
    let numFibo = 1;
    let soma = 0;
    while(numFibo<=num){
      if(numFibo%2==1){
        soma+=numFibo;
      }
      numFibo += antes;
      antes = numFibo-antes;
    }
  
    return soma;
  }
  
  console.log(sumFibs(4));
  console.log(sumFibs(1));
  console.log(sumFibs(1000));
  console.log(sumFibs(75024));
  console.log(sumFibs(17));