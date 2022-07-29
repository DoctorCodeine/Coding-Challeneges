/*
1.Declare a function called countBy 
	Input: array, callback
  Output: object 
2. Initialize an object to be return 
3. Initialize a variable to count the number of times even is return
4. Initialize a variable to count hte number of tiems odd is reuturn 
5. Iterate over the array by using the forEach method
    -> Use the callback on each element which will serve as the key of the object 
    -> Value of each key will be the number of times even is return or Odd is returned 
    ->Use a conditional statement: If the return value is even, then increament the counter of the key 
6. Return the object 
*/

const countBy = (array, callback) => {
  const obj ={};
  let countEven = 0;
  let countOdd = 0; 
  
  array.forEach((element) => {
  
    if (callback(element) === 'even'){
      	countEven++;
       obj[callback(element)] = countEven; 
    }
    else{ 
    countOdd++
    obj[callback(element)] = countOdd;
    }
  })
  
  return obj;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
