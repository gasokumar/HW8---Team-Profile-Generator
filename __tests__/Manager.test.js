// Since this class inherits properties and methods from the employee class, we need to test that it properly inherits properties and methods from the employee class in addition to the new things added to this class.

const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email and office number properties", () => {
      const manager = new Manager(
        "Ami",
        313,
        "gasokumar@gmail.com",
        1234567890
      );

      expect(manager.name).toEqual("Ami");
      expect(manager.id).toEqual(313);
      expect(manager.email).toEqual("gasokumar@gmail.com");
      expect(manager.officeNumber).toEqual(1234567890);
    });
  });
  describe("Methods", () => {
    it("should get the manager's name from getName()", () => {
      const manager = new Manager(
        "Ami",
        313,
        "gasokumar@gmail.com",
        1234567890
      );
      expect(manager.getName()).toEqual("Ami");
    });
    it("should get the manager's id from getId()", () => {
      const manager = new Manager("Ami", 313, "gasokumar@gmail.com");
      expect(manager.getId()).toEqual(313);
    });
    it("should get the manager's email from getEmail()", () => {
      const manager = new Manager(
        "Ami",
        313,
        "gasokumar@gmail.com",
        1234567890
      );
      expect(manager.getEmail()).toEqual("gasokumar@gmail.com");
    });
    it("should get the Manager's role from getRole()", () => {
      const manager = new Manager(
        "Ami",
        313,
        "gasokumar@gmail.com",
        1234567890
      );
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
