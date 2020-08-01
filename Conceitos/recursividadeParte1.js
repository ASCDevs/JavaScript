//Funções recursivas devem ter um caso-base, caso contrário não irá conseguir finalizar

var array = [1,3,5,6,7,8]

function mult(arr,n) {
	if(n<=0){
		return 1;
	}else{
		return mult(arr,n-1)*arr[n-1];
	}
}

console.log(mult(array,3));

function fat(n){
	if(n<=1){
		return 1
	}else{
		return n*fat(n-1);
	}
	
}

function fibonacci(n){
	if(n==0||n==1){
		return n
	}else{
		return fibonacci(n-1)+fibonacci(n-2)
	}
}
function soma(arr, n) {
  if(n<=1){
    return n==0? 0:arr[n-1];
  }else{
    return arr[n-1]+sum(arr,n-1);
  }
}

console.log(fat(3))
console.log(fat(5))
console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(9))
console.log(soma(array,4))
