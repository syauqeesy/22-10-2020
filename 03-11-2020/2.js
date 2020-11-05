const reverseSentence = (sentence) => {
  if(typeof sentence !== 'string') {
    return `sentence is must be string!`
  }

  const words = sentence.split(' ')
  let reversedSentence = ''

  for(let i = words.length - 1; i >= 0; i--) {
    reversedSentence += `${words[i]} `
  }

  return reversedSentence
}

console.log(reverseSentence('Saya Belajar JavaScript'))