function duplicateEncode(word){
    // ...
  word = word.toLowerCase()
  return word.split('').map(item => word.indexOf(item) === word.lastIndexOf(item) ? item = '(' : item = ')').join('')
}


console.log(duplicateEncode('ahjha')) // => ))())
console.log(duplicateEncode('HellO there o')) // => ))))))())()))
console.log(duplicateEncode('Sets')) // =>  )(()