const strongPasswordGenerator = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let generatedPassword = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-='
      for (let i = 0; i < 16; i++) {
        generatedPassword += characters.charAt(Math.floor(Math.random() * (characters.length - 1)))
      }
      
      if(generatedPassword) {
        resolve(generatedPassword)
      } else {
        reject(new Error('Generate password failed'))
      }
    }, 1000)
  })
}

strongPasswordGenerator()
  .then((generatedPassword) => {
    console.log(generatedPassword)
  })
  .catch((error) => {
    console.log(error.message)
  })


const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = [
        { id: 1, name: 'Laptop Gaming', desc: 'Super powerfull gaming laptop' },
        { id: 2, name: 'Samsung Smartphone', desc: 'Samsung smartphone for everyone' },
        { id: 3, name: 'Logitech Office Mouse', desc: 'Basic Mouse' },
        { id: 4, name: 'Logitech G Ambidextrous', desc: 'Gaming mouse for prodigy' },
        { id: 5, name: 'Audio-Technica Monitor Headphone', desc: 'Headphone for professional producer' }
      ]

      const product = products.find((product) => {
        return product.id === id
      })

      if(product) {
        resolve(product)
      } else {
        reject(new Error('Product not found'))
      }
    }, 1000)
  })
}

getProductById(3)
  .then((product) => {
    console.log(product)
  })
  .catch((error) => {
    console.log(error.message)
  })
