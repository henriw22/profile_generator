const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

const buildParagraph = () => {
  console.log(`My name is ${answers[0]}, I like to ${answers[1]} while listening to ${answers[2]}. My favourite meal is ${answers[4]} for ${answers[3]}. My most favourite sport is ${answers[5]} and I'm amazing at ${answers[6]}`);
}

// console.log('\n\n -- BEFORE QUESTION -- \n\n');

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          answers.push(answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              answers.push(answer);
              buildParagraph();
              rl.close();
            });
          });
        });
      });
    });
  });
});

// console.log('\n\n -- AFTER QUESTION -- \n\n');
