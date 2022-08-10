/*Write a function factorial() that takes a number as an 
argument and returns the factorial of the number.

Assume only positive numbers will be given as an argument 
for the factorial() function.*/

const factorial = (num) => {
    for (let i = (num - 1); i > 0; i--){
      num *= i; 
    }  return num;
  }
  
  console.log(factorial(6));

//////////////////////////


/*Write a function subLength() that takes 2 parameters, a string 
and a single character. The function should search the string 
for the two occurrences of the character and return the length 
between them including the 2 characters. If there are less than 
2 or more than 2 occurrences of the character the function should 
return 0.*/

const subLength = function (str, char) {
    
    let y = str.split('').filter(x => x == char)

    if (y.length !== 2) { 
      return 0;
    }
    y = str.lastIndexOf(char) - str.indexOf(char) + 1; 

    return y; 
    
}

console.log(subLength('summer', 'm'));

///////////////////////////////

/*Write a function groceries() that takes an array of object literals 
of grocery items. The function should return a string with each 
item separated by a comma except the last two items should be 
separated by the word 'and'. Make sure spaces (' ') are inserted 
where they are appropriate.*/

const groceries = function(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length-1; i++) {
      newArr.push(arr[i].item)
    }
    if (arr.length > 2) {
      let newArr2 = [];
      for (let j = 0; j <= newArr.length-3; j++) {
        newArr2.push(newArr[j]);
  };
     return newArr2.join(', ') + `, ${newArr[newArr.length-2]} and ${newArr[newArr.length-1]}`;
    } else if (arr.length === 2) {
      return newArr.join(' and ');
    } else {
      return newArr.join(', ');
    };
  
  };