const cypher = require("./app");

// test("makes first letter capitalized", () => {
//   expect(func("string")).toBe("String");
// });

// test("makes first letter capitalized", () => {
//   expect(func("this is a string with the first letter capitalized.")).toBe(
//     "This is a string with the first letter capitalized."
//   );
// });

// test("returns string reversed", () => {
//   expect(reverseString("String")).toBe("gnirtS");
// });
// test("returns string reversed", () => {
//   expect(reverseString("This is Ian and I am reversed")).toBe(
//     "desrever ma I dna naI si sihT"
//   );
// });

// test("returns the math asked for", () => {
//   expect(calculator(10, 3, "+")).toBe(13);
// });
// test("returns the math asked for", () => {
//   expect(calculator(100, 9, "-")).toBe(91);
// });
// test("returns the math asked for", () => {
//   expect(calculator(2, 8, "*")).toBe(16);
// });
// test("returns the math asked for", () => {
//   expect(calculator(40, 4, "/")).toBe(10);
// });

test("returns encoded text", () => {
  expect(cipher("caesar"));
});
