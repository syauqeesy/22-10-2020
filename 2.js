const IPA = 80
const MTK = 90
const bahasaIndonesia = 89
const bahasaInggris = 69

if(IPA && MTK && bahasaIndonesia && bahasaInggris) {
  const averageScore = (IPA + MTK + bahasaInggris + bahasaIndonesia) / 4
  
  if(averageScore >= 90 && averageScore <= 100) {
    console.log(`
      Rata-rata: ${averageScore}
      Grade: A
    `)
  } else if(averageScore >= 80 && averageScore <= 89) {
    console.log(`
      Rata-rata: ${averageScore}
      Grade: B
    `)
  } else if(averageScore >= 70 && averageScore <= 79) {
    console.log(`
      Rata-rata: ${averageScore}
      Grade: C
    `)
  } else if(averageScore >= 60 && averageScore <= 69) {
    console.log(`
      Rata-rata: ${averageScore}
      Grade: D
    `)
  } else if(averageScore >= 0 && averageScore <= 59) {
    console.log(`
      Rata-rata: ${averageScore}
      Grade: E
    `)
  } else {
    console.log(`Nilai tidak valid!`)
  }

} else {
  console.log(`semua nilai harus diisi!`);
}