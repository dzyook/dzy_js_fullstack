const readline = require('readline');
const fs = require('fs')
// process 进程
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI>'
});

const preHint = `
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`

function createPackageJSON() {
  // JSON你想怎么准备？
  var map = {};
  questions.forEach((question,index) => {
    map[question] = answers[index];
  });

  fs.writeFileSync('./package.json',JSON.stringify(map, null, 4));
}

const questions = ['name','version','author'];
const defaultAnswers = ['name','1.0.0','none'];
const answers = [];

var index = 0;
function runQuestionLoop () {
  if (index === questions.length) {
    createPackageJSON();
    rl.close();
    return;
  }
  let defaultAnswer =  defaultAnswers[index]
  let question = questions[index] + ':(' + defaultAnswer +')';
  rl.question(question,function(answer) {
    answers.push(answer || defaultAnswer);
    index++;
    runQuestionLoop();
  })
}
runQuestionLoop()
