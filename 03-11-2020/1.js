const palindromeChecker = (word) => {
  if(typeof word !== 'string') {
    return `word is must be string!`
  }

  let reversedWord = ''

  for(let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i]
  }

  if(reversedWord === word) {
    return `${word} adalah palindrome`
  } else {
    return `${word} bukan palindrome`
  }
}

console.log(palindromeChecker('malam'))