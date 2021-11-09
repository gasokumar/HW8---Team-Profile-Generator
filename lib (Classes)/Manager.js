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
}
module.exports = Manager;
