	/*
  1. Initialize a function called intersection 
  
  	1a. input: arrays 
    1b. output: array with matched elements from all three arrays 
    
  2. Delcare a reducer callback function which will preform the reduce method 
  		parameter: totalFound, currentArray 
      -> Intialize a variable to store an empty variable for the output 
      ->Itrate over the accumulator (totalFound) using the .forEach() method
      	--> if the current array includes any elements that of the accumulator then push those values into the output array 
        --> return the output array 
  3. Use the reduce method on the array. In the method, the parameter: reducer 
  */

	const intersection = (array) => {
    
   const reducer = ((totalFound, currentArray) => {
     let hold = [];
     
     totalFound.forEach((element) => {
       if (currentArray.includes(element)) hold.push(element);
     });
     
     return hold;
    });
	return array.reduce(reducer);
  }

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
