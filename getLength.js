/*
Input: Array 
Output: The count of how many elements are in the array 

Edge case: If the array does not have an element then return i

Initialize the index = 0

increament i

return the function passing the index of the array with the slice element of each index 
*/

function getLength(array, i = 0) {
	if (array.length === 0) return i;
	i++;
  return getLength(array.slice(1), i);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
