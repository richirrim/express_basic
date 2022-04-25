const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola, Peter😎')
})

app.listen(port, () => {
  console.log(`APP corriendo en el puerto: ${port}`)
})
