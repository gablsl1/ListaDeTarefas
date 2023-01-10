const express = require('express')

const tarefasController = require('./controllers/tarefasController')

const router = express.Router()

router.get('/v1/tarefas', tarefasController.getAll)

module.exports = router