function verificarSituacaoAluno() {
  
  const numeroAulasString = prompt("Digite o número total de aulas do semestre:");
  const numeroFaltasString = prompt("Digite o número de faltas do aluno:");
  const notaP1String = prompt("Digite a nota da primeira prova (P1):");
  const notaP2String = prompt("Digite a nota da segunda prova (P2):");

  const numeroAulas = parseInt(numeroAulasString);
  const numeroFaltas = parseInt(numeroFaltasString);
  const notaP1 = parseFloat(notaP1String);
  const notaP2 = parseFloat(notaP2String);

  
  if (isNaN(numeroAulas) || isNaN(numeroFaltas) || isNaN(notaP1) || isNaN(notaP2) || numeroAulas <= 0 || numeroFaltas < 0 || numeroFaltas > numeroAulas || notaP1 < 0 || notaP1 > 10 || notaP2 < 0 || notaP2 > 10) {
    alert("Dados inválidos. Por favor, insira valores numéricos válidos.");
    return;
  }

  
  const percentualPresenca = ((numeroAulas - numeroFaltas) / numeroAulas) * 100;
  
  let situacaoFrequencia;
  if (percentualPresenca >= 75) {
    situacaoFrequencia = "APROVADO POR FREQUÊNCIA";
  } else {
    situacaoFrequencia = "REPROVADO POR FREQUÊNCIA";
  }

  const mediaNotas = (notaP1 + notaP2) / 2;
  let situacaoFinal = "";
  let notaRecuperacao = 0;

 
  if (situacaoFrequencia === "REPROVADO POR FREQUÊNCIA") {
    situacaoFinal = "REPROVADO POR FREQUÊNCIA";
  } else {
    if (mediaNotas >= 7.0) {
      situacaoFinal = "APROVADO POR NOTA";
    } else if (mediaNotas >= 5.0 && mediaNotas < 7.0) {
     
      const notaRecuperacaoString = prompt("Média em recuperação. Digite a nota da prova complementar:");
      notaRecuperacao = parseFloat(notaRecuperacaoString);

      if (isNaN(notaRecuperacao) || notaRecuperacao < 0 || notaRecuperacao > 10) {
        alert("Nota de recuperação inválida.");
        return;
      }

      const mediaFinal = (mediaNotas + notaRecuperacao) / 2;
      
      if (mediaFinal >= 5.0) {
        situacaoFinal = "APROVADO NA RECUPERAÇÃO";
      } else {
        situacaoFinal = "REPROVADO NA RECUPERAÇÃO";
      }

    } else { 
      situacaoFinal = "REPROVADO POR NOTA";
    }
  }


  console.log("--- Situação do Aluno ---");
  console.log(`Número de aulas do semestre: ${numeroAulas}`);
  console.log(`Número de faltas do aluno: ${numeroFaltas}`);
  console.log(`Percentual de presença do aluno: ${percentualPresenca.toFixed(2)}%`);
  console.log("\n--------------------------");
  console.log(`A primeira nota: ${notaP1.toFixed(1)}`);
  console.log(`Segunda nota: ${notaP2.toFixed(1)}`);
  
  if (notaRecuperacao > 0) {
      console.log(`Nota complementar (recuperação): ${notaRecuperacao.toFixed(1)}`);
  }
  
  console.log(`\nSituação final do aluno: ${situacaoFinal}`);
}
verificarSituacaoAluno();