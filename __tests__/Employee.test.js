const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object with name, id, and email properties", () => {
      const employee = new Employee("Ami", 313, "gasokumar@gmail.com");

      expect(employee.name).toEqual("Ami");
      expect(employee.id).toEqual(313);
      expect(employee.email).toEqual("gasokumar@gmail.com");
    });
  });
  describe("Methods", () => {
    it("should get the employee's name from getName()", () => {
      const employee = new Employee("Ami", 313, "gasokumar@gmail.com");
      expect(employee.getName()).toEqual("Ami");
    });
    it("should get the employee's id from getId()", () => {
      const employee = new Employee("Ami", 313, "gasokumar@gmail.com");
      expect(employee.getId()).toEqual(313);
    });
    it("should get the employee's email from getEmail()", () => {
      const employee = new Employee("Ami", 313, "gasokumar@gmail.com");
      expect(employee.getEmail()).toEqual("gasokumar@gmail.com");
    });
    it("should get the employee's role from getRole()", () => {
      const employee = new Employee("Ami", 313, "gasokumar@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
