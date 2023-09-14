const Task = require('../models/Task')

const getTasks = (req, res) => {
  Task.find().sort({ createdAt: -1 })
    .then((result) => res.json(result))
    .catch((error) => console.log(error))
}

const createTask = (req, res) => {
  const task = new Task(req.body)
  task.save()
    .then((result) => res.send('Task created'))
    .catch((error) => console.log(error))
}

module.exports = {
  getTasks,
  createTask
}