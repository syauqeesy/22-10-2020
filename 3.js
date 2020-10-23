const printSegitiga = 5

if(typeof printSegitiga !== `number`) {
  console.log(`Data harus number!`)
} else {
  let numbers = ''

  for(let i = printSegitiga; i >= 1; i--) {
    numbers = ''
    for(let j = 1; j <= i; j++) {
      numbers += j
    }
    console.log(numbers)
  }
}