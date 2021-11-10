//This file actually runs the application. Has inquirer prompts, stores data, then calls the template helper code functions to create html. Then writes to the index file. This file does the heavy lifting/uses all the stuff we've created. If all the files/functions we created were the infinity stones, then this file is Thanos with the gauntlet.

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
//DEPENDENCIES
//Import fs and inquirer prompts, as well as class/constructor dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { data } = require("browserslist");
const { add } = require("lodash");
const HTMLtemplates = require("./src (Template helper code)");

//Store data in an array and use functions that take in that data to create objects whose properties will be inserted into the cards

// Array to put team members in as they are generated
const teamArray = [];

// INQUIRER PROMPTS =============================================================
//Manager prompts for when app starts up
//team manager’s name, employee ID, email address, and office number

//addManager creates a manager and pushes it to the team array.
const addManager = () => {
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
      //The properties are the keys from the above questions that are mapped to the answers the user gives
      const { name, id, email, officeNumber } = input;
      //Object destructuring: {property, property, property, property} = object
      const manager = new Manager(name, id, email, officeNumber);
      //   console.log(manager);
      teamArray.push(manager);
    });
};
//Employee prompts for either an engineer or an intern. If engineer is selected, in addition to the name, id, and email properties, it will apply a github property as well when constructing the engineer. If an intern is selected, it will be created with the name, id, email, and school properties. Regardless of which type of employee is selected, they will be pushed to the team array once created.
const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the role of this employee?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of this next employee?",
      },
      { type: "number", name: "id", message: "What is the employee's id?" },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is this engineer's github username?",
        when: (response) => response.role == "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Where does or did the intern go to school??",
        when: (response) => response.role == "Intern",
      },
      {
        type: "confirm",
        name: "confirmNewEmployee",
        message: "Do you want to add a new employee?",
        default: false,
      },
    ])
    .then((input) => {
      const { role, name, id, email, github, school, confirmNewEmployee } =
        input;
      //If the role of the employee is an engineer, run this block of code, which creates a new engineer object and pushes it to the team array.
      if (role == "Engineer") {
        const elonTusk = new Engineer(name, id, email, github);
        teamArray.push(elonTusk);
        console.log(teamArray);
        //If the role of the employee is an intern, run this block of code, which creates a new intern object and pushes it to the team array.
      } else if (role == "Intern") {
        const owenWilson = new Intern(name, id, email, school);
        teamArray.push(owenWilson);
        console.log(teamArray);
      }
      if (confirmNewEmployee == false) {
        //If the user answers no to whether they want to add a team member, return the array of team members
        return teamArray;
      } else {
        //If the user answers that they do want to add a team member, bring the user back to the beginning
        addEmployee();
      }
    });
};

// Creating a constant reference that refers to the file system method for creating a file.
const createFile = fs.writeFile("./dist/index.html", data, (err) =>
  err
    ? console.error(err)
    : console.log("Your team profile has been generated!")
);

//Create the manager, then create the employees. After you create the employees, generate an html card for each employee. Afer this, append these cards to the pre-written html skeleton.
addManager().then(addEmployee).then(HTMLtemplates);

//The inquirer inquirer.prompt method returns a promise, which we then use to create objects with our pre-defined constructor functions.  Once these objects are created and stored in an array, we use this data to create cards with our template helper code module and then insert these cards into our html page skeleton.
