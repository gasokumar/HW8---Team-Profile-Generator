// Since this class inherits properties and methods from the employee class, we need to test that it properly inherits properties and methods from the employee class in addition to the new things added to this class.

const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email and github properties", () => {
      const engineer = new Engineer(
        "Ami",
        313,
        "gasokumar@gmail.com",
        "gasokumar"
      );

      expect(engineer.name).toEqual("Ami");
      expect(engineer.id).toEqual(313);
      expect(engineer.email).toEqual("gasokumar@gmail.com");
      expect(engineer.github).toEqual("gasokumar");
    });
  });
  describe("Methods", () => {
    it("should get the engineer's name from getName()", () => {
      const engineer = new Engineer(
        "Ami",
        313,
        "gasokumar@gmail.com",
        "gasokumar"
      );

      expect(engineer.getName()).toEqual("Ami");
    });
    it("should get the engineer's id from getId()", () => {
      const engineer = new Engineer(
        "Ami",
        313,
        "gasokumar@gmail.com",
        "gasokumar"
      );

      expect(engineer.getId()).toEqual(313);
    });
    it("should get the engineer's email from getEmail()", () => {
      const engineer = new Engineer(
        "Ami",
        313,
        "gasokumar@gmail.com",
        "gasokumar"
      );

      expect(engineer.getEmail()).toEqual("gasokumar@gmail.com");
    });
    it("should get the engineer's role from getRole()", () => {
      const engineer = new Engineer(
        "Ami",
        313,
        "gasokumar@gmail.com",
        "gasokumar"
      );

      expect(engineer.getRole()).toEqual("Engineer");
    });
    it("should get the engineer's github from getGithub()", () => {
      const engineer = new Engineer(
        "Ami",
        313,
        "gasokumar@gmail.com",
        "gasokumar"
      );

      expect(engineer.getGithub()).toEqual("gasokumar");
    });
  });
});
