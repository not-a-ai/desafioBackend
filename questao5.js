const rl = require('readline')

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question('Digite uma palavra:', input => {
  let word = input.split('');
  let reverse = '';
  while (word.length !== 0){

    let letter  = word.pop();
    reverse += letter;
  }
  console.log(reverse);
  prompt.close();
});