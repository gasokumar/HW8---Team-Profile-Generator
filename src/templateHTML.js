//Template helper code --> Will be responsible for housing functions that create the html for employee cards, joining it together into an HTML document/string and then exporting it to the actual index.js that will handle writing it to the file.
// Basically, this file is a module that will be used for creating the HTML parts that will be stitched together.

const { data } = require("browserslist");

//Card templates are sourced from https://codepen.io/saviomartin/pen/LYNgqKW but edited/repurposed here

//Create functions that will create an html template/card for each profile

//Manager Card
// Will intake manager object and input its properties into an html template
//Will need manager email to link to email
function managerCard(manager) {
  return `<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>M</h2>
        <h3>${manager.name}</h3>
        <p>Role: Manager</p>
        <p>ID: ${manager.id}</p>
        <p>
          Email:
          <a href="mailto:${manager.email}">${manager.email}</a>
        </p>
        <p>Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
  </div>
</div>`;
}

//Engineer
//Will intake engineer properties and input them into an html template
function engineerCard(engineer) {
  return `<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>E</h2>
        <h3>${engineer.name}</h3>
        <p>Role: Engineer</p>
        <p>ID: ${engineer.id}</p>
        <p>
          Email:
          <a href="mailto:${engineer.email}">${engineer.email}</a>
        </p>
        <p>Github: <a href="github.com/${engineer.github}">github.com/${engineer.github}</a>
        </p>
      </div>
    </div>
  </div>
</div>`;
}

//Intern
//Will intake intern properties and input them into an html template
function internCard(intern) {
  return `<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>I</h2>
        <h3>${intern.name}</h3>
        <p>Role: Engineer</p>
        <p>ID: ${intern.id}</p>
        <p>
          Email:
          <a href="mailto:${intern.email}">${intern.email}</a>
        </p>
        <p>School: ${intern.school}</p>
      </div>
    </div>
  </div>
</div>`;
}

//Create a function that makes an array that will actually use the above functions. This function will be responsible for creating the actual cards and joining the HTML pieces into a string.

//Returns an HTML string of card templates
function createHTMLCards(employees) {
  arrayCards = [];
  // For loop that iterates through the employees inputted, gets their role, and generates their card accordingly.
  for (const employee of employees) {
    const role = employee.getRole();
    if (role === "Manager") {
      const card = managerCard(employee);
      arrayCards.push(card);
    }

    if (role === "Engineer") {
      const card = engineerCard(employee);
      arrayCards.push(card);
    }

    if (role === "Intern") {
      const card = internCard(employee);
      arrayCards.push(card);
    }
  }
  //Join the array into a string and insert it into the html doc.

  //Joining the array of card templates into a string
  const cardsHTML = arrayCards.join("");
  return cardsHTML;
}

//Once the card templates have been generated and strung together, you need a function that will insert them into a preset html page and output the entire created page.
function createPageHTML(cardsHTML) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=
    , initial-scale=1.0"
    />
    <title>Team Profile Generator</title>
    <!-- My stylesheet -->
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
  <header>Our Team</header>
    <!-- Cards will go here -->
    ${cardsHTML}
    <!-- End of cards -->
  </body>
</html>
`;
}

// Stitching the string of card templates into the HTML skeleton.

//This function takes in an array (of employee data), makes cards for them, and then stitches the cards into the HTML skeleton to create the index.html contents.

//Export to index
module.exports = {
  managerCard,
  engineerCard,
  internCard,
  createHTMLCards,
  createPageHTML,
};
