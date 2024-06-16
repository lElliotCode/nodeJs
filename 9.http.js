const { findAvailablePort } = require('./10.free-port')
const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Conectando al Servidor')
  res.end('Hola Mundo')
})

const findPort = async (desirePort) => {
  const port = await findAvailablePort(desirePort)
  server.listen(port, () => {
    console.log(`Server listen on PORT http://localhost:${port}`)
  })
}

findPort(3000)
