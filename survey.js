const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? Nicknames are also acceptable: ", (name) => {
  rl.question("What's an activity you like doing?: ", (activity) => {
    rl.question("What do you listen to while doing that?: ", (music) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.): ", (meal) => {
        rl.question("What's your favourite thing to eat in that meal?: ", (dish) => {
          rl.question("Which sport is your absolute favourite?: ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!: ", (ability) => {
              console.log(`So your name is ${name}.`);
              console.log(`Your favourite activity is ${activity}.`);
              console.log(`Your listening to ${music} while ${activity}.`);
              console.log(`Your favourite meal is ${meal}.`);
              console.log(`You like to eat ${dish} at ${meal}.`);
              console.log(`So you like to play/watch ${sport}.`);
              console.log(`You're amazing at ${ability}.`);
              console.log("Thanks for answering all my questions!");
              rl.close();
            });
          });
        });
      });
    });
  });
});