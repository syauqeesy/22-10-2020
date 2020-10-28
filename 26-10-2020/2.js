const searchName = (keyword, maxOutput = 1, callback) => {
  if(typeof keyword !== 'string') {
    console.log(`Keyword must be a string!`)
    return
  }

  if(typeof maxOutput !== 'number') {
    console.log(`Max output must be a number!`)
    return
  }

  if(maxOutput < 1) {
    console.log(`Minimum output is 1!`)
    return
  }

  const names =  [ 'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope' ]
  
  return callback(keyword, maxOutput, names)
}

const results = searchName('an', 3, (keyword, maxOutput, names) => {
  const searchResults = names.filter((name) => {
    return name.toLowerCase().includes(keyword.toLowerCase())
  })

  if(searchResults.length < 1) {
    console.log(`Not found!`)
    return searchResults
  }

  return searchResults.slice(0, maxOutput)
})

console.log(results)