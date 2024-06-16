const path = require('node:path')

console.log(path.sep) // <--- Separador de rutas de carpetas segun SO

const filePath = path.join('content', 'subfolder', 'test.txt') // <--- Devuelve un path o una ruta completa con strings que se pasan como argumentos
console.log(filePath)

const base = path.basename('/tmp/random/carpeta/password.txt') // <--- Devuelve el nombre del archivo completo, con su extensión
console.log(base)

const fileName = path.basename('/tmp/random/carpeta/password.txt', '.txt') // <--- Devuelve el nombre del archivo sin el segundo argumento, en este caso '.txt'
console.log(fileName)

const extension = path.extname('some.random.image.jpg')// <--- Devuelve la extensión del archivo
console.log(extension)
