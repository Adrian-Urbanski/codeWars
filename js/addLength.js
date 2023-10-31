function addLength(str) {
    let strSplit = str.split(' ')
    let answer = strSplit.map((word) => word = `${word} ${word.length}`)
    
    return answer
    }
    