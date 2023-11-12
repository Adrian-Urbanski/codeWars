/*There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique*/

function findUniq(arr) {
    anwer=11111111
  arr.some(function(value, index, array) {
    if( array[index+1] !== array[index+2] && array[index+1] !== array[index]){
      answer =arr[index+1]
      return arr[index+1]
    }
    else if(array[index] !== array[index+1] && array[index] !== array[index+2]){  
      answer =arr[index]
      return arr[index] 
    }
  })
  return answer
  }