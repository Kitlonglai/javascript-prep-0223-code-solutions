/* exported compact */
function compact(array) {
  const output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      output.push(array[i]);
    }
  }
  return output;
}
