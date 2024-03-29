const express = require('express')
const mongoose = require('mongoose')
const app = express()
const taskRoute = require('./src/routes/tasksRoute')

app.use(express.json())
mongoose.connect('mongodb://0.0.0.0/todo')
const connection = mongoose.connection

app.use('/tasks', taskRoute)

app.listen(4000, () => {
  connection.once('open', () => {
    console.log('done')
  })
  connection.on('error', () => {
    console.log('db error')
  })
})
