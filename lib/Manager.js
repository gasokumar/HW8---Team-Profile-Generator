const Employee = require("./Employee");
//Creating a new class Manager that extends the Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //Inherits name, id and email properties from employee class
    super(name, id, email);
    // Creating new office Number property from inputted officeNumber
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  //If I put managerCard here, I would be attempting/starting from an object oriented approach. The way I did this activity is approached in a functional approach.
  // renderCard() {
  //   return `<div class="container">
  //   <div class="card">
  //     <div class="box">
  //       <div class="content">
  //         <h2>M</h2>
  //         <h3>${this.name}</h3>
  //         <p>Role: Manager</p>
  //         <p>ID: ${this.id}</p>
  //         <p>
  //           Email:
  //           <a href="mailto:${this.email}">${this.email}</a>
  //         </p>
  //         <p>Office Number: ${this.officeNumber}</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>`;
  // }
}
module.exports = Manager;
