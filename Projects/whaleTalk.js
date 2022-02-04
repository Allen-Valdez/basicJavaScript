/*
                              Whale Talk
Objective: Take a phrase like 'turpentine and turtles' and translate it into its "whale talk" equivalent: 'UUEEIEEAUUEE'

Key Constraints:
1.) There are no consonants. Only vowels excluding "y"
2.) The u's and e's are extra long, so we must double them in our program
*/

// Make a variable named input and set its value to any phrase
let input = "Hi, Human"
// Create an array named vowels and its elements contain the vowels in the English language
const vowels = ['a', 'e', 'i', 'o', 'u'];
// Create an empty array that will story the matching vowels in my input and store it
const whaleTalk = [];
// Iterate through the array and check the string if they match. If they do, return that vowel. Remember if its a E or U it will be double
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      whaleTalk.push(vowels[j]);
      if (input[i] === 'e' || input[i] === 'u') {
        whaleTalk.push(input[i]);
      }
    }
  }
}
console.log(whaleTalk);