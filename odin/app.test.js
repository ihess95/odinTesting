const analyzeArray = require("./app");
const cipher = require("./app");

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

// test("returns input unchanged", () => {
//   expect(cipher("caesar", 0)).toBe("caesar");
// });
// test("returns input shifted by 1", () => {
//   expect(cipher("caesar", 1)).toBe("dbftbs");
// });
// test("returns input shifted by 1, testing case sensitivity", () => {
//   expect(cipher("Caesar", 1)).toBe("Dbftbs");
// });
// test("returns input shifted by 1, testing puncutation", () => {
//   expect(cipher("Caesar.r", 1)).toBe("Dbftbs,s");
// });
// test("returns input shifted by 5", () => {
//   expect(cipher("Caesar.r", 5)).toBe("Hfjxfwbw");
// });

test("returns an object", () => {
  expect(analyzeArray([1, 8, 4, 3, 22, 2, 4])).toEqual({
    average: "6.29",
    length: 7,
    max: 22,
    min: 1,
  });
});
