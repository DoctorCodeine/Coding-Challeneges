/* 1. Decalre the function called reduce which will take 3 parameters 
			-> Input: array, callback, startValue
  		-> Output: a number 
    2. Declare a callback function called reducer which will preform the reduce method. 
    		paramter: acc, curr -> Paramters will be added to eachother 
    3. Return the reduce method used on the input array. 
    		parameter: reducer function, callback that will be used on each element of the array, and the start value that is initalized at 0 
*/ 
const reduce = (array, callback, startValue) => { 
 const reducer = ((acc,curr) => acc + curr);

  return array.reduce((reducer, callback),  startValue);
} 

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8
