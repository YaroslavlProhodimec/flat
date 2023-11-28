// const friends = [
//   { name: "alex", pizza: ["cheese", "peperoni"] },
//   { name: "mike", pizza: ["salami", "margarita"] },
//   { name: "stas", pizza: ["meat"] },
//   { name: "anna", pizza: ["fish"] },
// ];
//
// const likePizza = (input) => {
//   let resultArray = [];
//   for (let i = 0; i < input.length; i++) {
//     let char = input[i].pizza;
//     for (let j = 0; j < char.length; j++) {
//       // resultArray.push(char[j]);
//       resultArray = [...resultArray, char[j]];
//     }
//   }
//   return resultArray;
// };
//
// console.log(likePizza(friends));

// // const myStr = "pizza";
// //
// // const reverseMyStr = (input) => {
// //   let result = "";
// //
// //   for (let i = input.length - 1; i >= 0; i--) {
// //     let char = input[i];
// //     result += char;
// //   }
// //
// //   return result;
// // };
// // console.log(reverseMyStr(myStr));
const randomColor = () => {
  const random = () => Math.round(Math.random() * 255);

  return `rgb(${random()},${random()},${random()},)`;
};
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());

// let obj = {
//   a: { b: { c: "d" }, e: "f" },
// };
//
//
// console.log(get(obj, "a.b"));
// console.log(get(obj, "a.b.c"));
// console.log(get(obj, "a.e"));
// console.log(get(obj, "a.x.e"));

//
// console.log(isStringRotated("javascript", "scriptjava")); // -> true
// console.log(isStringRotated("javascript", "iptjavascr")); // -> true
// console.log(isStringRotated("javascript", "java")); // -> false
// async function loadJson(url) {
//   try {
//     let response = await fetch(url);
//     if (response.status == 200) {
//       return response.json();
//     }
//   } catch (e) {
//     throw new Error(response.status);
//   }
// }
//
// loadJson("no-such-user.json") // (3)
//   .catch(); // Error: 404

//

// const multiplies = (number) => {
//   if (number < 0) {
//     return 0;
//   }
//   let sum = 0;
//
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//
//   return sum;
// };
//
// console.log(multiplies(10));
// console.log(multiplies(20));

// const toCamelCase = (string) => {
//   let start = "-";
//   let end = "_";
//
//   if (string.includes(start)) {
//     let arr = string.split("-");
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length > 0) arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     return arr;
//     // return arr.join("");
//   }

// if (string.includes(end)) {
//   let arr = string.split("_");
//
// }
// };
//
// function toCamelCase(str) {
//   let result = "";
//   let count = 1;
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charCodeAt(i);
//     if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
//       if (count) {
//         result += str[i].toUpperCase();
//       } else {
//         result += str[i].toLowerCase();
//       }
//       count = 0;
//     } else {
//       count = 1;
//     }
//   }
//   return result;
// }
//
// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));
// console.log(toCamelCase("The-tEAalth-waRRior"));
// console.log(toCamelCase("A-B-C"));
const sum = (input) => {
  function rekursia(arr) {
    let localSum = 0;
    for (let i = 0; i < arr.length; i++) {
      let char = arr[i];
      if (Array.isArray(char)) {
        localSum += rekursia(char);
      } else {
        localSum += char;
      }
    }
    return localSum;
  }

  return rekursia(input);
};

let arr = [[1, 2, [3, 4]], [9], [10, 12]];

console.log(result1, "result1");
const result = arr.flat(Infinity).reduce((acc, el) => acc + el);
console.log(sum(arr)); // Вернет сумму всех чисел в массиве, включая вложенные массивы
