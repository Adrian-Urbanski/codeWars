

function checkExam(array1, array2) {
    let score = 0
     array1.forEach((element,index) => {
        
       if(!array2[index]){
         score = score
       }
       else if(element === array2[index]){
         score += 4
       }
       else{
         score -=1
       }
       
       
     })
     return score < 0? 0:score
   }

   console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))