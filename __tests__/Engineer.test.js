// import Engineer class form lib
const Engineer = require("../lib/Engineer");

describe("Create Engineer Object", () => {
    it("should creat a new Engineer", () => {
        const engineer = new Engineer(
            "Dexter",
            25,
            "dexter@dexter.com",
            "DexterDick"
        );
        expect(engineer.gitHub).toEqual("DexterDick");
    });
});

describe("github", () => {
    it("should return github address of engineer", () => {
        const engineer = new Engineer(
            "Dexter",
            25,
            "dexter@dexter.com",
            "DexterDick"
        );
        expect(engineer.gitHub).toEqual("DexterDick");
    });
});

describe("Role", () => {
    it("should return role of engineer", () => {
        const engineer = new Engineer(
            "Dexter",
            25,
            "dexter@dexter.com",
            "DexterDick"
        );

        expect(engineer.getRole()).toEqual("Engineer");
    });
});
