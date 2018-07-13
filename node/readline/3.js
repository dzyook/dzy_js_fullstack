const readline = require('readline');
const fs = require('fs');

const completer = (line) =>{
  const command = 'npm';
  const subCommands = ['help','init','install'];

  if(line.length < command.length) {
    return [command.indexOf(line) === 0 ? [command] : [],line];
  }
  // filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
  let hits = subCommands.filter((subCommand) => {
    const lineTrippedCommand =  line.replace(command,'').trim();
    return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand)=== 0
  })
  // console.log(hits)

  if(hits.length === 1) {
    hits = hits.map(function (hit) {
      return [command, hit].join(' ');
    })
  }
  //匹配多个 或者没有匹配到

  return [hits.length ? hits : subCommands, line];
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
});

rl.prompt();