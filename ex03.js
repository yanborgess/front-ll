

function analisarNumeros(numeros) {
 
  if (numeros.length === 0) {
    console.log("O conjunto de números está vazio.");
    return; 
  }

  let menorValor = numeros[0];
  let maiorValor = numeros[0];
  let somaValores = 0;


  for (let i = 0; i < numeros.length; i++) {
    const numeroAtual = numeros[i];

    if (numeroAtual < menorValor) {
      menorValor = numeroAtual;
    }

    
    if (numeroAtual > maiorValor) {
      maiorValor = numeroAtual;
    }

    somaValores += numeroAtual;
  }

  
  console.log("Resultados:");
  console.log(`Menor valor: ${menorValor}`);
  console.log(`Maior valor: ${maiorValor}`);
  console.log(`Soma dos valores: ${somaValores}`);
}


const meuConjuntoDeNumeros = [15, 8, 2, 25, 10, 3];
analisarNumeros(meuConjuntoDeNumeros);


const outroConjunto = [50, 100, 25, 150, 75];
analisarNumeros(outroConjunto);