const reverseSentence = (sentence) => {
  if(typeof sentence !== 'string') {
    return `sentence is must be string!`
  }

  const words = sentence.split(' ')
  const reversedWords = []

  for(let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i])
  }

  let reversedSentence = ''

  for(let i = 0; i < reversedWords.length; i++) {
    reversedSentence += `${reversedWords[i]} `
  }

  return reversedSentence

}

console.log(reverseSentence('Saya Belajar JavaScript'))