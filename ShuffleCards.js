/*
input: topHalf and bottomHalf 
Output: An array of cards interleaved 

1. base case: If both  half does not have any cards then return undefined?

2. Consider the length of the arrays: Since the arrays are not of the same length when we interleave them we will have instances of the array that will be return as undefined
	--> Filter out the values that return undefined in the array 
  
3. Declare an empty array to be passed in as a parameter 

4. Push the elements of cards from both arrays into the results array 

5.Rreturn the function passing in each element that is slice from the array and using the filter method to filter out the element that reutnrs as undefined
*/
function shuffleCards(topHalf, bottomHalf, result = []) {
  // YOUR CODE HERE
  if (topHalf.length === 0 && bottomHalf.length === 0) return result;

  result.push(topHalf[0]);
  result.push(bottomHalf[0]);
  
  return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), result.filter(element => element !== undefined));
	

  
}



// UNCOMMENT TO TEST YOUR WORK
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
//   /*-> ['Queen of Diamonds',
//         'Jack of Hearts',
//         'Five of Hearts',
//         'Ten of Spades',
//         'Ace of Spades',
//         'Eight of Clubs',
//       ]
//   */
