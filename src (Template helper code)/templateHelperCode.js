//Template helper code --> Will be responsible for housing functions that create the html for employee cards, joining it together into an HTML document/string and then exporting it to the actual index.js that will handle writing it to the file.
// Basically, this file is a module that will be used for creating the HTML parts that will be stitched together.

//Card templates are sourced from https://codepen.io/saviomartin/pen/LYNgqKW but repurposed here

//Create functions that will create an html template/card for each profile

//Manager Card
// Will intake manager properties and input them into an html template
function managerCard(manager) {
  return `<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>M</h2>
        <h3>Manager</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          totam velit? Iure nemo labore inventore?
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>`;
}

//Engineer
//Will intake engineer properties and input them into an html template

//Intern
//Will intake intern properties and input them into an html template

//Create a function that makes an array that will store the html templates once they've been created

//Join the array into a string and insert it into the html doc.

//Export to index
