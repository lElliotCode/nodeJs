const fs = require('node:fs')

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log(err)
  }
  // <--- se ejecuta el callback
  console.log(text)
})

console.log('Otras cosas mientras lee el primer archivo')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log(err)
  }
  // <--- se ejecuta el callback
  console.log(text)
})
