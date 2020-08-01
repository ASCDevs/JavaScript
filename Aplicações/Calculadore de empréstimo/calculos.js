
function calcular() {
	//Pega os campos
	let vlEmprestimo = document.getElementById('vlEmprestimo');
	let vlJuros = document.getElementById('vlJuros');
	let anos = document.getElementById('anos');
	let vlMensal = document.getElementById('vlMensal');
	let total = document.getElementById('vlTotal');
	let vlDif = document.getElementById('vlDif');

	//faz conversões de juros e valores
	let emprestimo = parseFloat(vlEmprestimo.value);
	let diferenca = parseFloat(vlJuros.value)/100/12;
	let pags = parseFloat(anos.value)*12;

	//calcula valores mensais
	let x = Math.pow(1+diferenca,pags);
	let mensalmente = (emprestimo*x*diferenca)/(x-1)

	//se o resultado é um número finito, entrada correta
	//campos de sáida serão preenchidos
	if(isFinite(mensalmente)){
		vlMensal.innerHTML = "R$ "+mensalmente.toFixed(2);
		total.innerHTML = "R$ "+(mensalmente*pags).toFixed(2);
		vlDif.innerHTML = "R$ "+((mensalmente*pags)-emprestimo).toFixed(2);
	}


}