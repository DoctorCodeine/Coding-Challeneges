//Decalre the function called union
//Input: array of arrays 
//Output: A single array of elements that are found in all arrays 
//Initialize a callback function to be used with the reducer method 
	//Inside of this reducer callback: accumulator = totalArray, current element = currentArrau (that is being compared to the first array )
		//Join all of the arrays together 
	//Use the reduce method on the reducer function to obtain a single array of all elements 
	//Declare a variable to store the reduce method 
	//Return the variable with making a new set of array of the elements that were reduced 

const union = (array) => {

  const reducer = ((firstArray, currentArray) => firstArray.concat(currentArray))
  
 	const allElements = array.reduce(reducer);

  return [...new Set(allElements)];
}
// const sortNumbers = (array) => {
//   return array.filter((element, index) => {array.indexOf(element) === index})
// }

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
