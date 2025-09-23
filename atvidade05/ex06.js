function calcularInvestimento() {

  const capitalString = prompt("Digite o capital inicial (C):");
  const taxaString = prompt("Digite a taxa de juros mensal (i), em percentual:");
  const tempoString = prompt("Digite o tempo do investimento (t), em meses:");

 
  const capital = parseFloat(capitalString);
  const taxa = parseFloat(taxaString);
  const tempo = parseFloat(tempoString);

 
  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital <= 0 || taxa < 0 || tempo < 0) {
    alert("Entrada inválida. Por favor, digite valores numéricos positivos.");
    return;
  }

  const taxaDecimal = taxa / 100;


  const montante = capital * Math.pow((1 + taxaDecimal), tempo);

  console.log("--- Resumo do Investimento ---");
  console.log(`Capital Inicial (C): R$ ${capital.toFixed(2)}`);
  console.log(`Taxa de Juros Mensal (i): ${taxa.toFixed(2)}%`);
  console.log(`Tempo do Investimento (t): ${tempo.toFixed(0)} meses`);
  console.log(`\nMontante Final (M): R$ ${montante.toFixed(2)}`);
}


calcularInvestimento();