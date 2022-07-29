/*
1. Declare a function called objOfMatchces 
	input: array1, array 2, callback 
  output: object 
2. Declare an empty obj that will store the output 
3. Iterate over the array1 and array. 2 by using Math max
	-> If array2 does not includes the element of array 1 with the callback used on each element of array 1, then assign the key as the element in array 1 and values with the callback used on the elements on array 2 
4. return the object 
*/

const objOfMatches = (array1, array2, callback) => {
  const output = {};

	for (let i = 0; i < Math.max(array1.length, array2.length); i++){

    if (callback(array1[i]) === array2[i]) output[array1[i]] = array2[i];
  }
  
  return output; 
 
}

// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
