//This file actually runs the application. Has inquirer prompts, stores data, then calls the template helper code functions to create html. Then writes to the index file. This file does the heavy lifting/uses all the stuff we've created. If all the files/functions we created were the infinity stones, then this file is Thanos with the gauntlet.

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

//Import fs and inquirer prompts
const fs = require("fs");
const inquirer = require("inquirer");
const { off } = require("process");
const Manager = require("./lib (Classes)/Manager");

// Array to put team members in as they are generated
teamArray = [];
//Write inquirer prompts
//Manager prompts for when app starts up
//team manager’s name, employee ID, email address, and office number
// const addManager = () => {
//   return
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What the manager's name?",
    },
    { type: "number", name: "id", message: "What is the manager's id?" },
    {
      type: "input",
      name: "email",
      message: "what is the manager's email address?",
    },
    {
      type: "number",
      name: "officeNumber",
      message: "What is the manager's office number?",
    },
  ])
  .then((input) => {
    const { name, id, email, officeNumber } = input;
    //Object destructuring: {property, property, property, property} = object
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    teamArray.push(manager);

    // const manager = new Manager();
  });
// };

//Store data in an array and use functions that take in that data to create the cards/html.

//Will probably need promises for inquire prompts, then use that data to write to the file.
