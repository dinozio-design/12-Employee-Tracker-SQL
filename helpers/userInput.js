const inquirer = require('inquirer');



const userInput = async(primaryQs) => {
  const ask = await   inquirer
  .prompt(primaryQs)
  const userChoice = ask.overall.replace(/ /g, "").toLowerCase();
  console.log(userChoice, 'hi');
}


// const addEmployee

module.exports = userInput;