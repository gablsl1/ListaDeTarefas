const tarefasModel = require('../models/tarefasModel')

const getAll = async (_req, res) => {
    const tarefas = await tarefasModel.getAll()
    return res.status(200).json(tarefas)
}

const criarTarefas = async (req, res) => {
    const tarefaCriada = await tarefasModel.criarTarefas(req.body)
    return res.status(201).json(tarefaCriada)
}

module.exports = {
    getAll,
    criarTarefas
}