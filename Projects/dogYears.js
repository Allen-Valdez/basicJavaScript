/*
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.
*/
// I will store my age in a variable to convert it into dog years
let myAge = 23;
// Since the first 2 years of the dog counts as 10.5 years each, I will do the math seperately
let earlyYears = 2;
earlyYears *= 10.5;
// Since we accounted for the first 2 years above, I will take away 2 years from my age that way we do not miscalculate. I will then store the result to laterYears to finish my calculation
let laterYears = myAge - 2;
// Since the following years after the first 2 now count as 4 years, I will multiply the laterYears by 4
laterYears *= 4;
// Now that we got the math out of the way, we will add the laterYears and ealryYears to get the accurate age in dog years
myAgeInDogYears = laterYears + earlyYears;
// Now codecademy wants me to utilize a built-in method to convert a string containing my name into lower case
let myName = 'ALLEN';
myName = myName.toLowerCase();
// Now I will utilize string interpolation to display the values in a sentence
let sentence = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years in dog years.`;
console.log(sentence);