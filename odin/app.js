// function capitalize(s) {
//   return s.charAt(0).toUpperCase() + s.slice(1);
// }

// function reverseString(s) {
//   let arr = s.split("");
//   let rev = arr.reverse();
//   return rev.join("");
// }

// function calculator(a, b, op) {
//   if (op === "+") {
//     return a + b;
//   } else if (op === "-") {
//     return a - b;
//   } else if (op === "*") {
//     return a * b;
//   } else if (op === "/") {
//     return a / b;
//   } else {
//     return "Error";
//   }
// }

function cipher(input, offset) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let shifted = "";
  let output = "";
  for (let i = 0; i < alpha.length; i++) {
    let n = (i + offset) % alpha.length;
    shifted += alpha[n];
  }
  for (let j = 0; j < input.length; j++) {
    let index = alpha.indexOf(input[j]);
    output += shifted[index];
  }
  return output;
}

// module.exports = capitalize;
// module.exports = reverseString;
// module.exports = calculator;
module.exports = cipher;
