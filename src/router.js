const express = require('express')

const tarefasController = require('./controllers/tarefasController')

const middleware = require('./middlewares/tarefasMiddleware')

const router = express.Router()

router.get('/tarefas', tarefasController.getAll)
router.post('/tarefas', middleware.validarFieldTitulo ,tarefasController.criarTarefas)
router.delete('/tarefas/:id', tarefasController.deletarTarefas)
router.put('/tarefas/:id', middleware.validarFieldTitulo, middleware.validarFieldStatus, tarefasController.atualizarTarefa)

module.exports = router