function calcularCrescimentoPopulacional() {
  let populacaoA = 80000;
  const taxaA = 0.03;
  let populacaoB = 200000;
  const taxaB = 0.015;
  let anos = 0;

  while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    anos++;
  }

  console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
  console.log(`População final de A: ${populacaoA.toFixed(2)}`);
  console.log(`População final de B: ${populacaoB.toFixed(2)}`);
}

calcularCrescimentoPopulacional();