var person = {
  firstName: 'Kitlong',
  lastName: 'Lai',
  hobby: 'soccer, streetwear, and rock climbing'
};

console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);
person.job = 'Home Care Administrator';
console.log("The person's current job is " + person.job);
person.previousJob = 'Printing Press Operator';
console.log("The person's previous job is " + person.previousJob);
console.log(person);
