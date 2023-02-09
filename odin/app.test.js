const capitalize = require("./app");

test("makes first letter capitalized", () => {
  expect(capitalize("string")).toBe("String");
});

test("makes first letter capitalized", () => {
  expect(
    capitalize("this is a string with the first letter capitalized.")
  ).toBe("This is a string with the first letter capitalized.");
});
