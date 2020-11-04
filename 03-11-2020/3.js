// Algoritma
// 1. Start
// 2. Input data ke parameter number
// 3. Cek apakah tipe data inputan adalah number. jika tidak kembali ke step 2
// 4. Ubah variable number menjadi string
// 5. Pisah variable number menjadi array dengan separatornya angka 0 dan masukan ke variable numbers
// 6. Urutkan angka disetiap elemen variable numbers
// 7. Gabung variable numbers menjadi satu string
// 8. Ubah variable numbers menjadi tipe data number
// 9. Tampilkan value variable numbers
// 10. End

const divideAndSort = (number) => {
  if(typeof number !== 'number') {
    return `Inputan harus number`
  }

  number = number.toString()
  const numbers = number.split('0')

  for(let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].split('').sort().join('')
  }

  return parseInt(numbers.join(''))
} 

console.log(divideAndSort(912012912802430))