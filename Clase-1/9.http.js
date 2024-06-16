const { findAvailablePort } = require('./10.free-port')
const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Conectando al Servidor')
  res.end('Hola Mundo')
})

const envPort = process.env.PORT ?? 3000

const findPort = async (envPort) => {
  const port = await findAvailablePort(envPort)
  server.listen(port, () => {
    console.log(`Server listen on PORT http://localhost:${port}`)
  })
}

findPort(envPort)
