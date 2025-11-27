function getEl(selector) {
    const el = document.querySelector(selector);
    if (!el)
        throw new Error(`Element ${selector} not found`);
    return el;
}
// Celsius Converter
const celInput = getEl("#celInput");
const celButton = getEl("#celButton");
const celOutput = getEl("#celOutput");
function celsiusToFahrenheit(c) {
    return (c * 9) / 5 + 32;
}
celButton.addEventListener("click", () => {
    const value = Number(celInput.value);
    celOutput.innerHTML = String(celsiusToFahrenheit(value));
});
const arrInput = getEl("#arrInput");
const arrButton = getEl("#arrButton");
const arrOutput = getEl("#arrOutput");
const avgOutput = getEl("#avgOutput");
function sumOfArray(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
}
arrButton.addEventListener("click", () => {
    const result = arrInput.value.split(",").map(Number);
    arrOutput.innerHTML = String(sumOfArray(result));
    avgOutput.innerHTML = String(sumOfArray(result) / result.length);
});
// Maximum number in array
const arrayInput = getEl("#arrayInput");
const arrayButton = getEl("#arrayButton");
const arrayOutput = getEl("#arrayOutput");
function maxArray(arr) {
    return Math.max(...arr);
}
arrayButton.addEventListener("click", () => {
    const result = arrayInput.value.split(",").map(Number);
    arrayOutput.innerHTML = String(maxArray(result));
});
const evenInput = getEl("#evenInput");
const evenButton = getEl("#evenButton");
const evenOutput = getEl("#evenOutput");
function evenNum(arr) {
    return arr.filter((n) => n % 2 === 0);
}
evenButton.addEventListener("click", () => {
    const result = evenInput.value.split(",").map(Number);
    evenOutput.innerHTML = evenNum(result).join(", ");
});
const gradeInput = getEl("#gradeInput");
const gradeButton = getEl("#gradeButton");
const gradeOutput = getEl("#gradeOutput");
function marksGrade(mark) {
    if (mark >= 85)
        return "Grade A";
    if (mark >= 70)
        return "Grade B";
    return "Grade C";
}
gradeButton.addEventListener("click", () => {
    gradeOutput.innerHTML = marksGrade(Number(gradeInput.value));
});
const numInput = getEl("#numInput");
const numButton = getEl("#numButton");
const numOutput = getEl("#numOutput");
function reverseString(str) {
    return str.split("").reverse().join("");
}
numButton.addEventListener("click", () => {
    numOutput.innerHTML = reverseString(numInput.value);
});
// Vowel Count
const strInput = getEl("#strInput");
const strButton = getEl("#strButton");
const strOutput = getEl("#strOutput");
function vowelCount(str) {
    const vowels = "aeiouAEIOU";
    return [...str].filter((ch) => vowels.includes(ch)).length;
}
strButton.addEventListener("click", () => {
    strOutput.innerHTML = String(vowelCount(strInput.value));
});
export {};
//# sourceMappingURL=index.js.map