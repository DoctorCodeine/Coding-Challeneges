/* 
1. Declare a function called forEach which has two paramters: callback and array
	1a. Use the flatMap array method to use the callback on each element of the array and return it 
2/ Decalre a function called map, using the foreach method 
*/ 

const forEach = (array, callback) => {
  let result = [];
 for (const element of array){
   result.push(callback(element)); 
	}
}

const map = (array, callback) => {
    return array.flatMap(element => callback(element)); 
  }

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
