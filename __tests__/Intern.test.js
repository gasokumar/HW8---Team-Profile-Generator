// Since this class inherits properties and methods from the employee class, we need to test that it properly inherits properties and methods from the employee class in addition to the new things added to this class.

const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email and school properties", () => {
      const intern = new Intern("Ami", 313, "gasokumar@gmail.com", "Columbia");

      expect(intern.name).toEqual("Ami");
      expect(intern.id).toEqual(313);
      expect(intern.email).toEqual("gasokumar@gmail.com");
      expect(intern.school).toEqual("Columbia");
    });
  });
  describe("Methods", () => {
    it("should get the intern's name from getName()", () => {
      const intern = new Intern("Ami", 313, "gasokumar@gmail.com", "Columbia");

      expect(intern.getName()).toEqual("Ami");
    });
    it("should get the intern's id from getId()", () => {
      const intern = new Intern("Ami", 313, "gasokumar@gmail.com", "Columbia");

      expect(intern.getId()).toEqual(313);
    });
    it("should get the intern's email from getEmail()", () => {
      const intern = new Intern("Ami", 313, "gasokumar@gmail.com", "Columbia");

      expect(intern.getEmail()).toEqual("gasokumar@gmail.com");
    });
    it("should get the intern's role from getRole()", () => {
      const intern = new Intern("Ami", 313, "gasokumar@gmail.com", "Columbia");

      expect(intern.getRole()).toEqual("Intern");
    });
    it("should get the intern's school from getSchool()", () => {
      const intern = new Intern("Ami", 313, "gasokumar@gmail.com", "Columbia");

      expect(intern.getSchool()).toEqual("Columbia");
    });
  });
});
