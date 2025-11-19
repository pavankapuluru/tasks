function celsiusToFahrenheit(c) {
  let fahrenheit = c * (9 / 5) + 32;
  return fahrenheit;
}
let value = celsiusToFahrenheit(30);
console.log(value);

// celsiusToFahrenheit

let arr = [1, 2, 3, 4, 5];
const sumOfArray = (arr) => {
  let sum = 0;
  arr.forEach((val) => {
    sum += val;
  });
  return sum;
};
console.log(sumOfArray(arr));

// Sum of Array

avg = sumOfArray(arr) / arr.length;
console.log(avg);

// average of array

let arrTwo = [1, 2, 3, 4, 5];
let max = arrTwo[0];
const maxArray = (val) => {
  arrTwo.forEach((val) => {
    if (val > max) {
      max = val;
    }
  });
  return max;
};
console.log(maxArray(arrTwo));

// Maximum Number of in Array

let arrThree = [5, 12, 15, 16, 14];
const evenNum = (even) => {
  let newArray = [];
  even.forEach((element) => {
    if (element % 2 == 0) {
      newArray.push(element);
    }
  });
  return newArray;
};
console.log(evenNum(arrThree));

// Even number in array

let grade = 75;
const marksGrade = (element) => {
  if (element >= 85) {
    return "grade A";
  } else if (element >= 70) {
    return "grade B";
  } else {
    return "grade c";
  }
};
console.log(marksGrade(grade));
// Grade Marks

let name = "Pavan";
let rev = "";
const revString = (element) => {
  for (let i = element.length - 1; i >= 0; i--) {
    rev += element[i];
  }
  return rev;
};
console.log(revString(name));

// Reverse String

let count = 0;

const vowelCount = (str) => {
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      count = count + 1;
    }
  }
  return count;
};
res = vowelCount("pavan");
console.log(res);

//Vowel count
