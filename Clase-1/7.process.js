// Argumentos de entrada en linea de comando
console.log(process.argv[2])

// Controlar el proceso y su salida de función

// process.exit()// => 0 es que todo salió bien y debería salir del proceso,'1' supone un error y una salida antes de tiempo para evitar romper la api

// Controlar eventos del proceso ('exit', 'open')

process.on('exit', () => {
  // limpiar recursos
  console.log('Proceso finalizado')
})

// Recuperar el cwd (Current Working Directory / Directorio actual de trabajo)

const cwd = process.cwd()

console.log(cwd)
