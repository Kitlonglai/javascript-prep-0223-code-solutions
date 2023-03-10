// create your loops here.
function whileLoop1() {
  const arrayReturning = [];
  let index = 0;
  while (index < 10) {
    arrayReturning.push(index);
    index++;
  }
  return arrayReturning;
}
console.log('whileLoop1 output', whileLoop1());
function whileLoop2() {
  const arrayReturning = [];
  let index = 0;
  while (index < 20) {
    arrayReturning.push(index);
    index += 2;
  }
  return arrayReturning;
}
console.log('whileLoop2 output', whileLoop2());
function forLoop1() {
  const arrayReturning = [];
  for (let index = 0; index < 10; index++) {
    arrayReturning.push(index);
  }
  return arrayReturning;
}
console.log(forLoop1());
function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time till explosion ' + index + '!');
  }
}
forLoop2();
function forInLoop1(object) {
  const arrayReturning = [];
  for (const key in object) {
    arrayReturning.push(key);
  }
  return arrayReturning;
}
const object = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};
console.log('for in loop 1 output', forInLoop1(object));
function forInLoop2(object) {
  const arrayReturning = [];
  for (const key in object) {
    arrayReturning.push(object[key]);
  }
  return arrayReturning;
}
console.log('for in loop 2 output', forInLoop2(object));
