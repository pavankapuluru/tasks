function getEl<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element ${selector} not found`);
  return el as T;
}

// Celsius Converter
const celInput = getEl<HTMLInputElement>("#celInput");
const celButton = getEl<HTMLButtonElement>("#celButton");
const celOutput = getEl<HTMLElement>("#celOutput");

function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

celButton.addEventListener("click", () => {
  const value = Number(celInput.value);
  celOutput.innerHTML = String(celsiusToFahrenheit(value));
});

const arrInput = getEl<HTMLInputElement>("#arrInput");
const arrButton = getEl<HTMLButtonElement>("#arrButton");
const arrOutput = getEl<HTMLElement>("#arrOutput");
const avgOutput = getEl<HTMLElement>("#avgOutput");

function sumOfArray(arr: number[]): number {
  return arr.reduce((sum, val) => sum + val, 0);
}

arrButton.addEventListener("click", () => {
  const result = arrInput.value.split(",").map(Number);
  arrOutput.innerHTML = String(sumOfArray(result));
  avgOutput.innerHTML = String(sumOfArray(result) / result.length);
});

// Maximum number in array

const arrayInput = getEl<HTMLInputElement>("#arrayInput");
const arrayButton = getEl<HTMLButtonElement>("#arrayButton");
const arrayOutput = getEl<HTMLElement>("#arrayOutput");

function maxArray(arr: number[]): number {
  return Math.max(...arr);
}

arrayButton.addEventListener("click", () => {
  const result = arrayInput.value.split(",").map(Number);
  arrayOutput.innerHTML = String(maxArray(result));
});

const evenInput = getEl<HTMLInputElement>("#evenInput");
const evenButton = getEl<HTMLButtonElement>("#evenButton");
const evenOutput = getEl<HTMLElement>("#evenOutput");

function evenNum(arr: number[]): number[] {
  return arr.filter((n) => n % 2 === 0);
}

evenButton.addEventListener("click", () => {
  const result = evenInput.value.split(",").map(Number);
  evenOutput.innerHTML = evenNum(result).join(", ");
});

const gradeInput = getEl<HTMLInputElement>("#gradeInput");
const gradeButton = getEl<HTMLButtonElement>("#gradeButton");
const gradeOutput = getEl<HTMLElement>("#gradeOutput");

function marksGrade(mark: number): string {
  if (mark >= 85) return "Grade A";
  if (mark >= 70) return "Grade B";
  return "Grade C";
}

gradeButton.addEventListener("click", () => {
  gradeOutput.innerHTML = marksGrade(Number(gradeInput.value));
});

const numInput = getEl<HTMLInputElement>("#numInput");
const numButton = getEl<HTMLButtonElement>("#numButton");
const numOutput = getEl<HTMLElement>("#numOutput");

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

numButton.addEventListener("click", () => {
  numOutput.innerHTML = reverseString(numInput.value);
});

// Vowel Count

const strInput = getEl<HTMLInputElement>("#strInput");
const strButton = getEl<HTMLButtonElement>("#strButton");
const strOutput = getEl<HTMLElement>("#strOutput");

function vowelCount(str: string): number {
  const vowels = "aeiouAEIOU";
  return [...str].filter((ch) => vowels.includes(ch)).length;
}

strButton.addEventListener("click", () => {
  strOutput.innerHTML = String(vowelCount(strInput.value));
});
