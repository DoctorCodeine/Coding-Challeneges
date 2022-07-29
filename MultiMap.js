/*
1. Declare a function called multiMap
	input: a1, arrayOfCallbacks
  output: object with array elements as keys and array of elements as its value 
2. Declare an empty object to be return at the end 
3. Declare an empty array to hold the values of the key 
4. Iterate over the array of values using the forEach method 
		--> Assign each element of array as keys of the object 
    --> Assign the value of the key which is the callback used on the key by using the map method on each element of the key 
5. Return the object 
*/

const multiMap = (arrays, callbacks) => {
  const result = {};
  
  arrays.forEach((element) => {
    result[element] = callbacks.map((callValues) => callValues(element));
  })
	
  return result;
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
