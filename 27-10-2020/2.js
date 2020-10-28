const getMonths = (callback) => {
  setTimeout(() => {
    let error = false
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

    if(!error) {
      callback(null, months)
    } else {
      callback(new Error('Sorry data not found', []))
    }
  }, 4000)
}

getMonths((error, months) => {
  if(error) {
    console.log(error.message)
    return
  }

  months.map((month) => {
    console.log(month)
  })
})