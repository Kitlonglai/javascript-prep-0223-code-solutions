var age = 25;
if (age < 18) {
  console.log('A child');
} else {
  console.log('An adult');
}
var student1Score = 99;
if (student1Score >= 70) {
  console.log('Congrats you received a passing grade!');
} else {
  console.log('Oh no you failed!');
}
var student2Score = 71;
if (student2Score < 60) {
  console.log('F');
} else if (student2Score < 70) {
  console.log('D');
} else if (student2Score < 80) {
  console.log('C');
} else if (student2Score < 90) {
  console.log('B');
} else if (student2Score < 100) {
  console.log('A');
} else {
  console.log('A++');
}
var season = 'winter';
if (season === 'summer') {
  console.log("it's hot today");
} else if (season === 'spring') {
  console.log('the flowers are blooming');
} else if (season === 'autumn') {
  console.log('the leaves are changing colors');
} else if (season === 'winter') {
  console.log("it's cold today");
} else {
  console.log('please enter a valid season');
}
var dayOfTheWeek = 'friday';
if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
  console.log('have a good weekend!');
} else {
  console.log('Its a weekday!');
}
