/* exported reverseWord */
function reverseWord(word) {
  let reversing = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversing += word[i];
  }
  return reversing;
}
