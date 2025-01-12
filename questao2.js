const rl = require('readline')

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findFibonacci(num) {
  let fibonacci = [0,1]
  while (fibonacci[fibonacci.length -1] < num) {
    let newNum = fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2];
    fibonacci.push(newNum);
  }
  if (fibonacci.includes(num)) {
    return `${num} pertence à sequencia de Fibonacci`;
  }
   return `${num} não pertence à sequencia de Fibonacci`
}

prompt.question('Digite um número:', input => {
  const num = parseInt(input, 10); 
  if (isNaN(num)) {
    console.log('Por favor, insira um número válido.');
  } else {
    console.log(findFibonacci(num)); 
  }
  prompt.close();
});
