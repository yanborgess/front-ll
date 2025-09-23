

function contarParesImpares() {
  let pares = 0;
  let impares = 0;
  let i = 1;

  while (i <= 10) {
    const numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));

    if (isNaN(numero)) {
      alert("Entrada inválida. Por favor, digite um número inteiro.");
      continue; 
    }

    if (numero % 2 === 0) {
      pares++;
    } else {
      impares++;
    }

    i++;
  }

  console.log(`Quantidade de números pares: ${pares}`);
  console.log(`Quantidade de números ímpares: ${impares}`);
}


contarParesImpares();