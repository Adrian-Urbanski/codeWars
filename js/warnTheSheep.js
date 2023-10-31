function warnTheSheep(queue) {
  let queueReversed = [...queue].reverse()

if(queue[(queue.length)-1] === 'wolf'){
  return "Pls go away and stop eating my sheep"
}
  else{
    return `Oi! Sheep number ${queueReversed.indexOf('wolf')}! You are about to be eaten by a wolf!`
  }
}