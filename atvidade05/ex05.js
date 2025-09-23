function calcularCirculo() {

  const raioString = prompt("Digite o raio do círculo:");
  const raio = parseFloat(raioString);
  const PI = Math.PI; 
  if (isNaN(raio) || raio <= 0) {
    alert("Entrada inválida. Por favor, digite um número positivo para o raio.");
    return; 
  }

  const area = PI * raio * raio;
  const perimetro = 2 * PI * raio;

  console.log("--- Resultados do Círculo ---");
  console.log(`Raio fornecido: ${raio}`);
  console.log(`Área do círculo: ${area.toFixed(2)}`);
  console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}


calcularCirculo();