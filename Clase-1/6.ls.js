/* const fs = require('node:fs')

fs.readdir('../', (err, files) => {
    if(err){
        console.log('Error al leer el directorio: ', err)
        return;
    };
    console.log(files)
    files.forEach(file => {
        console.log(file)
    })
})
*/

// Versión con fs/promises

const fs = require('node:fs/promises')

fs.readdir('.')
  .then(files => {
    console.log(files)
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
    }
  })
