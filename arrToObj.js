function arrToObj(array, callback) {
  /*
  1. Create an empty object to store the key value pair as desired 
  2. Iterate over the array, using .forEach() method 
  	2a. Assign the key value pair of the object
    	--> key is each element of the array 
      --> Value is the callback on the elements 
  3. Return the object 
  */
  const result = {}; 
  
  array.forEach((element) => result[element] = callback(element));
  
  return result;
  
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
