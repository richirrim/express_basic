const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 3000

const tasks = [
  {
    'id': 1,
    'description': 'Aprender Express Js',
    'isCompleted': false
  },
  {
    'id': 2,
    'description': 'Pasiar al Mayoneso',
    'isCompleted': true
  },
  {
    'id': 3,
    'description': 'Ver Naruto por 6ta vez:3',
    'isCompleted': false
  },
]


app.get('/', (req, res) => {
  res.send('<h1>ola, Peter😎</h1>')
})

app.get('/api/msj', (request, respose) => {
  respose.send('Chi')
})

app.get('/api/explorer', (request, respose) => {
  const explorer = { name: 'Ricardo', msj: 'Q hay, pai.' }
  respose.send(explorer)
})

app.get('/api/tasks', (request, respose) => {
  respose.json(tasks)
})

app.get('/api/tasks/:id', (request, response) => {
  const id = request.params.id
  const task = tasks.filter(task => task.id === id)
  response.json(task)
})

app.listen(PORT, () => {
  console.log(`APP corriendo en el puerto: ${PORT}`)
})
