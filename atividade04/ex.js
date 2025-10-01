
const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];


console.log('Terceiro nome:', nomes[2]);


nomes.push('Fernanda');
nomes.unshift('Gustavo');
console.log('Array com nomes adicionados:', nomes);


nomes.pop();
console.log('Array após a remoção do último nome:', nomes);


const numeros = [2, 4, 6, 8];
const numerosDobrados = numeros.map(numero => numero * 2);
console.log('Números originais:', numeros);
console.log('Números dobrados:', numerosDobrados);

const maisNumeros = [1, 3, 5, 7, 9];
const numerosMaioresQueCinco = maisNumeros.filter(numero => numero > 5);
console.log('Números originais:', maisNumeros);
console.log('Números maiores que 5:', numerosMaioresQueCinco);