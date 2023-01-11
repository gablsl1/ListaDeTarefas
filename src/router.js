const express = require('express')

const tarefasController = require('./controllers/tarefasController')

const router = express.Router()

router.get('/tarefas', tarefasController.getAll)
router.post('/tarefas', tarefasController.criarTarefas)

module.exports = router