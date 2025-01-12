const dados = require( './dados.json');

let minFaturamento = dados[0].valor;
let maxFaturamento = dados[0].valor;
let media = 0;

for(let faturamento of dados) {
  let valor = faturamento.valor;
  if(valor > maxFaturamento) {
    maxFaturamento = valor
  } else if(valor < minFaturamento && valor !== 0) {
    minFaturamento = valor;
  }
  media += valor;
}

media =  media/dados.length

console.log(`Faturamento máximo: ${maxFaturamento}. Fautamento mínimo: ${minFaturamento}. Média do faturamento: ${media}`)