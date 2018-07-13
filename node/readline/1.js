const readline = require('readline');

// process 进程
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('please input a word:', function(answer) {
  console.log('Your has entered [%s]',answer);
  rl.close();
});