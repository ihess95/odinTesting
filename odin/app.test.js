const reverseString = require("./app");

// test("makes first letter capitalized", () => {
//   expect(func("string")).toBe("String");
// });

// test("makes first letter capitalized", () => {
//   expect(func("this is a string with the first letter capitalized.")).toBe(
//     "This is a string with the first letter capitalized."
//   );
// });

test("returns string reversed", () => {
  expect(reverseString("String")).toBe("gnirtS");
});
