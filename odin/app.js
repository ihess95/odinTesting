// function capitalize(s) {
//   return s.charAt(0).toUpperCase() + s.slice(1);
// }

// function reverseString(s) {
//   let arr = s.split("");
//   let rev = arr.reverse();
//   return rev.join("");
// }

function calculator(a, b, op) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "/") {
    return a / b;
  } else {
    return "Error";
  }
}

// module.exports = capitalize;
// module.exports = reverseString;
module.exports = calculator;
