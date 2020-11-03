const cekHariKerja = (today) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const days = [ 'senin', 'selasa', 'rabu', 'kamis', 'jumat' ]
      const cek = days.find((day) => {
        return today === day
      })

      if(cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

cekHariKerja('minggu')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error.message)
  })
// .then() dan .catch() digunakan untuk menghandle promise. .then() untuk manghandle jika promisenya fulfilled
// .catch() digunakan untuk menghandle jika promisenya rejected
// kedua menthod ini menerima parameter callback function untuk menghandle aksi selanjutnya

const getResponse = async (today) => {
  try {
    const response = await cekHariKerja(today)
    console.log(response)
  } catch (error) {
    console.log(error.message)
  }
}

getResponse('selasa')
// try dan catch digunakan menghandle promise.
// Jika .then() dan .catch() menggunakan callback function untuk aksi selanjutnya, try dan catch tidak menggunakan itu
//  try dan catch digunakan agar asynchronous code kita lebih baik dan terhindar dari callback hell

