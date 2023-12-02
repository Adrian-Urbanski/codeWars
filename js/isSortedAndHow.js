/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
  let arrAsc = [...array].sort((a,b)=>a-b)
  let arrDsc = [...array].sort((a,b)=>b-a)
console.log((arrDsc == array))
    if(arrAsc.every((val, index) => val === array[index])){
      return 'yes, ascending'
    }
    
    else if(arrDsc.every((val, index) => val === array[index])){
      return 'yes, descending'
    }
    else{
      return 'no'
    }
    
  }

  