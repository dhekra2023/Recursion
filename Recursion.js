// While&For loops, Recursion || Material
/*****************************  1  ***********************/
//  Using a for loop THEN a while loop
//  Write a JavaScript function that will iterate from 0 to n. For each iteration,
//  it will check if the current number is odd or even, and display a message on the screen.
//  iterateAndLog(3); =>
//  Sample Output :
//  "0 is even"
//  "1 is odd"
//  "2 is even"
 

function iterateAndLogWithFor(n) {

  for (var i = 0; i < n; i++) {
    if(n%2===0){
    console.log( i +'is even')
    
  } else
console.log( i+' is odd')
}
}


function iterateAndLogWithWhile(n) {
  var i=0
  while(i<n)
  i++
  if (n%2 ===0){
   console.log (i +' '+ 'is even')
  } else (n%2 !==0)
  console.log(i+' '+'is odd')
 }
/*****************************  2  ***********************/
//  Using a for loop THEN a while loop THEN recursion
//  Write a JavaScript function that will iterate from n to 0. For each iteration,
//  it will check if the current number is odd or even, and display a message to the screen.
//  iterateAndLog(3); =>
//  Sample Output :
//  "2 is even"
//  "1 is odd"
//  "0 is even"

function iterateAndLogWithFor(n) {
  for (var i = 0; i < n; i++) {
if (n % 2 ===0){
   console.log(i+ 'is even')
  } else 
  console.log(i+' '+ 'is odd')
}
}

function iterateAndLogWithWhile(n) {
  var i=0
  while(i<n)
  i++
  if (n%2 ===0){
   console.log (i +' '+ 'is even')
  } else (n%2 !==0)
  console.log(i+' '+'is odd')
 }

 function reverseIterateAndLogRecursively(n) {
  if (n<0){
  return 'stop'
  } if (n%2===0){
  console.log(n ,' is even')
}else {
console.log(n,'is odd')
}
reverseIterateAndLogRecursively(n-1)
}
/*****************************  3  ***********************/
//  Using a for loop THEN a while loop
//  Write a function that:
//  Loop through the numbers 1 to n
//  If the number is divisible by 3, print "Julia"
//  If the number is divisible by 5, print "James"
//  If the number is divisible by 3 and 5, print "JuliaJames"
//  If the number is not divisible by 3 or 5, print the number
 

function weirdDivisionWithFor(n) {
  for (var i = 0; i < n; i++) {
    if (n%3 ===0 && n%5===0){
    return 'juliajames'
     } if (n%5 ===0){
    return 'james'
     }else if (n%3 ===0){
    return 'julia'
     }else 
     return 'n'
  }
}


function weirdDivisionWithWhile(n) {
  var i=0
  while (i<n) {
    i++
    if (n%3 ===0 && n%5===0){
      return 'juliajames'
       } if (n%5 ===0){
      return 'james'
       }else if (n%3 ===0){
      return 'julia'
       }else 
       return 'n'
  }
}
 

//  now recursively do the same function but looping from n to 1 instead of 1 to n
 

function inverseWeirdDivisionRecursively(n) {
  if(n<1)
  return 'stop'
  if (n%3 ===0 && n%5===0){
    return 'juliajames'
     } if (n%5 ===0){
    return 'james'
     }else if (n%3 ===0){
    return 'julia'
     }else 
     return 'n'
} 

/*****************************  4  ***********************/
//  Using a for loop THEN a while loop THEN Recursively
//  Write a function called laugh() that takes one parameter,
//  num that represents the number of "ha"s to return.
//  laugh(6); => "hahahahahaha" 
 

function laughWithFor(number) {
  var rslt=''
for (var i = 0; i < number; i++) {
  rslt = rslt+'ha'
  
}return rslt

}




function laughWithWhile(number) {
  var rslt=''
  var i=0
  while (i<number) {
   i++
   rslt += 'ha'
  }return rslt
 }
 
 function laughRecursively(number) {
   if (number===0){
   return ''
   } else{
     return 'ha' + laughRecursively(number-1)
 }
 }

/*****************************  4  ***********************/
 //Using a for loop THEN a while loop
 //Create a function that calculates the sum of a number as follows:
 //factorial(3); => 3+2+1 = 6
 //factorial(5); => 5+4+3+2+1 = 15
function sumWithWhile(number) {
    var rslt=0
    var i=0
    while (i<number) {
      i++
      rslt += i
    }return rslt
  }
  
  function sumWithfor(number) {
    var rslt =0
   for (var i = 0; i < number+1; i++) {
    rslt += i
   }return rslt
  }


/*****************************  5  ***********************/
 //Using recursion
 //Create a function that calculates the factorial of a number
 //factorial(3); => 3*2*1 = 6
 //factorial(5); => 5*4*3*2*1 = 120
 function factorialRecursively(number) {
  var rslt =0
if (number === 0){
return n
} 
return rslt = number * factorialRecursively(number-1)
}


/*****************************  6  ***********************/
 //Using a for loop THEN a while loop
 //Write a JavaScript program to get the integers in range (x, y)
 //and store then in an array
 Example:
 //range(3,9); => [3, 4, 5, 6, 7, 8]
 

 function rangeFor(min, max) {
  for (var i = min; i < max; i++) {
 console.log(i)
} 
}

function rangeWhile(min, max) {
  var i=min -1
  while(i<max-1){
  i++
 console.log(i)
} 
}


/*****************************  7  ***********************/
 //Using a for loop THEN a while loop THEN recursion
 //Write a function that takes a string and returns the same string reversed
 //reverse('abc'); => 'cba'
 //reverse('erf4') => '4fre'
 

 function reverseWithWhile(str) {
  var x=''
  var i=str.length
  while (i>0) {
    i--
    x+= str[i]
  }return x
  }
  
  function reverseWithFor(str) {
    var x=''
    for (var i = str.length-1; i >=0; i--) {
    x +=str[i]
    }return x
  }






function reverseRecursively(str) {

  // TODO: your work here

}
 

/*****************************  8  ***********************/
 //Using a for loop OR a while loop
 //You are given an integer. Return the sum of its digits.
 //Example:
 //addDigits(29); => 11
 //addDigits(90); => 9
 //addDigits(1231635132132); => 33
 

 function addDigits(num) {
  var rslt=0
  while (num>0) {
    rslt +=num%10
    num=Math.floor(num/10)
  }return rslt
}

 

/*****************************  9  ***********************/
 //RECURSIVELY
 //Write a JavaScript program to get the first n Fibonacci numbers
 //That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
 // Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
 // with the exception of the first two: fib(0) and fib(1). More succinctly,
 // fib(0) is 1
 // fib(1) is 1
 // fib(n) is fib(n - 1) + fib(n - 2)
 // Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.
 

function fibRecursive(number) {

  // TODO: your work goes here

}


/*****************************  10  ***********************/
 //Write a function that returns the first digit in a string using a for/while loop
 //(digits may be anywhere in the string)
 //firstDigit('sdsa3dsad020a2'); => 3
 //firstDigit('tdhs020a2'); => 0
 

 function firstDigit(str) {
  var digits='0123456789'
for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < digits.length; j++) {
     if(str[i]===digits[j]){
         return str[i]
            }
 
} 
} return 'not find' 
}



/*****************************  11  ***********************/
// Write a function remove that accepts an array and an element, and returns an
// array with all ocurrences of element removed.
 // #remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
 

 function remove(array, element) {
  var rslt=[]
  for (var i = 0; i < array.length; i++) {
    if(array[i] !==element){
rslt.push(array[i])
  }
}return rslt
}
 

/*****************************  12  ***********************/
// Write a function called average that takes an array of numbers as
 //a parameter and returns the average of those numbers.
 

 function average(arrOfNumbers) {
  var rslt=0
  for (var i = 0; i < arrOfNumbers.length; i++) {
        rslt+= arrOfNumbers[i]
    
    }
    return rslt /arrOfNumbers.length
  
}


/*****************************  13  ***********************/
 //Write a function that returns the maximum number in an array of numbers
 //findMax([1, 6, 8, 20, 6, -1, 9]); => 20
 //findMax([1, 6, 9, 0]); => 9
 

 function findMax(str) {
  var max=str[0]
  for (var i = 1; i < str.length; i++) {
      if(str[i]>max){
   max=str[i]
  }
}
  return max
}
 

/*****************************  14  ***********************/
 //Check if all digits of the given integer are even
 //the function should return only true if all the digits are even
 //evenDigitsOnly("1253"); => false
 //evenDigitsOnly("62680"); => true
 //evenDigitsOnly("62680"); => true
 //NOTE: YOUR FUNCTION TAKES A STRING REPRESENTATION OF A NUMBER AND NOT THE NUMBER ITSELF
// note that in the example, we called evenDigitsOnly("62680"), not evenDigitsOnly(62680)
 

function evenDigitsOnly(input) {
  var x=input.split()
  for (var i = 0; i < input.length; i++) {
    if (i%2 ===0&& x%2 ===0){
    return true
  }
} 
return false
}
 

/*****************************  15  ***********************/
//Create a function that checks if a string is a palindrome (google it)
//palindrome('aaba'); => false
//palindrome('kayak'); => true
//palindrome('2002'); => true
 

function isPalindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
 

/*****************************  16  ***********************/
//Write a function that return the first duplicate element in a given array of numbers
//Example:
//firstDuplicate([2, 1, 6, 5, 1, 3, 0]); => 1
//firstDuplicate([2, 1, 2, 5, 1, 3, 0]); => 2
//firstDuplicate([2, 1, 6, 5, 8, 3, 0]); => "No duplicates"
 

function FirstDuplicate(arr) {
  var rslt =[]
      for (var i = 0; i < arr.length; i++) {
          if(rslt[arr[i]]){
           return   arr[i]
      }else {
        rslt[arr[i]]=true
          
      }
}return arr
}

/*****************************  17  ***********************/
//Theater seats often display a row and seat number to help theatergoers find their seats.
//If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for
//loop to print out all of the different seat combinations in the theater.
 

function findCombinations() {

  // TODO: your work goes here

}