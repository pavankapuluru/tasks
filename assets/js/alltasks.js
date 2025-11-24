const celInput = document.querySelector("#celInput");
const celButton = document.querySelector("#celButton");
const celOutput = document.querySelector("#celOutput");
function celsiusToFahrenheit(c) {
  let fahrenheit = c * (9 / 5) + 32;
  return fahrenheit;
}
let value = celsiusToFahrenheit(30);
console.log(value);

celButton.addEventListener("click", () => {
  celOutput.innerHTML = celsiusToFahrenheit(celInput.value);
});

// celsiusToFahrenheit

const arrInput = document.querySelector("#arrInput");
const arrButton = document.querySelector("#arrButton");
const arrOutput = document.querySelector("#arrOutput");
const avgOutput = document.querySelector("#avgOutput");

let arr = [1, 2, 3, 4, 5];
const sumOfArray = (arr) => {
  let sum = 0;
  arr.forEach((val) => {
    sum += +val;
  });
  return sum;
};
avg = sumOfArray(arr) / arr.length;
console.log(avg);

arrButton.addEventListener("click", () => {
  let data = "";
  data += arrInput.value;
  let result = data.split(",");
  arrOutput.innerHTML = sumOfArray(result);
  avgOutput.innerHTML = sumOfArray(result) / result.length;
});

avg = sumOfArray(arr) / arr.length;
console.log(avg);

// sum and average of array

const arrayInput = document.querySelector("#arrayInput");
const arrayButton = document.querySelector("#arrayButton");
const arrayOutput = document.querySelector("#arrayOutput");

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

arrayButton.addEventListener("click", () => {
  let data = "";
  data += arrayInput.value;
  let result = data.split(",");
  arrayOutput.innerHTML = maxArray(result);
});

// Maximum Number of in Array

const evenInput = document.querySelector("#evenInput");
const evenButton = document.querySelector("#evenButton");
const evenOutput = document.querySelector("#evenOutput");

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

evenButton.addEventListener("click", () => {
  let data = "";
  data += evenInput.value;
  let result = data.split(",");
  evenOutput.innerHTML = evenNum(result);
});

// Even number in array

const gradeInput = document.querySelector("#gradeInput");
const gradeButton = document.querySelector("#gradeButton");
const gradeOutput = document.querySelector("#gradeOutput");

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

gradeButton.addEventListener("click", () => {
  gradeOutput.innerHTML = marksGrade(gradeInput.value);
});

// Grade Marks

const numInput = document.querySelector("#numInput");
const numButton = document.querySelector("#numButton");
const numOutput = document.querySelector("#numOutput");

let name = "Pavan";
let rev = "";
const revString = (element) => {
  for (let i = element.length - 1; i >= 0; i--) {
    rev += element[i];
  }
  return rev;
};
// console.log(revString(name));
numButton.addEventListener("click", () => {
  console.log(numInput);
  numOutput.innerHTML = revString(numInput.value);
});

// Reverse String

const strInput = document.querySelector("#strInput");
const strButton = document.querySelector("#strButton");
const strOutput = document.querySelector("#strOutput");

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

strButton.addEventListener("click", () => {
  let data = "";
  data += strInput.value;
  let result = data.split(",");
  strOutput.innerHTML = vowelCount(result);
});

//Vowel count
