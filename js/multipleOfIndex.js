function multipleOfIndex(array) {

    let answer = array.filter((element,index) => {
  
      return element%index===0 ||element==0
    
  })
    return answer
  }
  