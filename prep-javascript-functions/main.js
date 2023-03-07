function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
function getGreeting(name) {
  return 'Hello ' + name;
}
var getGreetingResult = getGreeting('World!');
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
function getCircleCircumference(radius) {
  return 2 * 3.141592653589793 * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var getFullNameResult = getFullName('Juan', ' Ramirez');
function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log(addTwoNumbersResult);
console.log(convertHoursToMinutesResult);
console.log(getGreetingResult);
console.log(addAndMultiplyBy5Result);
console.log(multiplyAndDivideBy5Result);
console.log(subtractTwoNumbersResult);
console.log(getCircleCircumferenceResult);
console.log(getFullNameResult);
console.log(cubeResult);
