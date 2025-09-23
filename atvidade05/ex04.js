function calcularSalarioFixo() {
  let salario = 1000;
  let percentualAumento = 0.0015; 
  const anoAtual = new Date().getFullYear();

  console.log(`Salário em 1995: R$ ${salario.toFixed(2)}`);


  for (let ano = 1996; ano <= anoAtual; ano++) {
    const aumento = salario * percentualAumento;
    salario += aumento;

    console.log(`Salário em ${ano}: R$ ${salario.toFixed(2)}`);

 
    if (ano >= 1997) {
      percentualAumento *= 2;
    }
  }

  console.log("\n--- Resultado Final ---");
  console.log(`O salário atual do funcionário é de: R$ ${salario.toFixed(2)}`);
}


calcularSalarioFixo();




function calcularSalarioUsuario() {
 
  const salarioInicialInput = prompt("Digite o salário inicial do funcionário:");
  let salario = parseFloat(salarioInicialInput);

 
  if (isNaN(salario) || salario <= 0) {
    alert("Entrada inválida. Por favor, digite um valor numérico válido maior que zero.");
    return; 
  }

  let percentualAumento = 0.0015;
  const anoContratacao = 1995;
  const anoAtual = new Date().getFullYear();

  console.log(`Salário inicial em ${anoContratacao}: R$ ${salario.toFixed(2)}`);


  for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
    const aumento = salario * percentualAumento;
    salario += aumento;

    console.log(`Salário em ${ano}: R$ ${salario.toFixed(2)}`);


    if (ano >= 1997) {
      percentualAumento *= 2;
    }
  }

  console.log("\n--- Resultado Final ---");
  console.log(`O salário atual do funcionário é de: R$ ${salario.toFixed(2)}`);
}


calcularSalarioUsuario();