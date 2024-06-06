const os = require('node:os')

console.log('Información del sitema Operativo: ')
console.log('---------------------')

console.log('Nombre del sitema operativo: ', os.platform())
console.log('Versión del sistema operativo: ', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs: ', os.cpus());
console.log('Memoria Libre: ', os.freemem() / 1024 /1024)
console.log('Memoria Total: ', os.totalmem() / 1024 /1024)
console.log('Uptime', os.uptime() / 60 / 60)