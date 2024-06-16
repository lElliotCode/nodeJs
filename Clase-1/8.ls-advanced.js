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
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

/*
fs.readdir(folder)
    .then( files => {
        console.log(folder)
        console.log(files)
        files.forEach(file => {
            const filePath = path.join(folder, file)
            console.log(filePath)
        })
    })
    .catch(err => {
        if (err) {
            console.error('Error al leer el directorio: ', err)
            return;
        }
    })
*/

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (e) {
    console.error(pc.red(`No se pudo leer el directorio: ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // stat = información del archivo
    } catch (e) {
      console.error(`No se puedo obtener la información del archivo: ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType === 'd' ? pc.blue(fileType) : pc.green(fileType)} - ${pc.bold(file.padEnd(20))} ${pc.yellow(fileSize.toString().padStart(5))} ${pc.magenta(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
