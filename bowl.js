// const ps = require("prompt-sync");
// const prompt = ps();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Bowl {
  constructor() {
    this.name
      rl.on('line', (data) => {
        this.name = data;
        console.log(`Hello ${this.name}, How are you`);
        rl.close();
      });
  }
  read() {
    rl.setPrompt("Your name: ");
    rl.prompt();
  }
  
}

module.exports = Bowl;