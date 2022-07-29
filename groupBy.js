/*
1.Declare the function called group by 
	input: array, callback
  output: object {callback on the array : array of the elements} 
1. Initialize an empty object
2. Iterate over the array using the forEach method 
	--> Conditional statement: If the callback has not been used on the element, then use it 
  	--> Otherwise return the object with the assigned key value pairs 
3. Return the objectt 
*/
const groupBy = (array, callback) => {
  const obj = {};
  const arr = []
	  array.forEach((element) => {
      
    if (!obj[callback(element)]) obj[callback(element)] = [element];
		
      else obj[callback(element)].push(element);

  
  })
  return obj; 
}
// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
