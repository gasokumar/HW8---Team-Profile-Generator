const Employee = require("./Employee");

class Engineer extends Employee {
  //Object Properties
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  //Object Methods
  getGithub() {
    return this.github;
  }
  getRole() {
    return "engineer";
  }
}
module.exports = Engineer;
