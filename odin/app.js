// function capitalize(s) {
//   return s.charAt(0).toUpperCase() + s.slice(1);
// }

function reverseString(s) {
  let arr = s.split("");
  let rev = arr.reverse();
  return rev.join("");
}

// module.exports = capitalize;
module.exports = reverseString;
