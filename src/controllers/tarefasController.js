const tarefasModel = require('../models/tarefasModel')

const getAll = async (_req, res) => {
    const tarefas = await tarefasModel.getAll()
    return res.status(200).json(tarefas)
}

const criarTarefas = async (req, res) => {
    const tarefaCriada = await tarefasModel.criarTarefas(req.body)
    return res.status(201).json(tarefaCriada)
}

const deletarTarefas = async (req, res) => {
    const { id } = req.params

    await tarefasModel.deletarTarefas(id)
    return res.status(204).json()
}

const atualizarTarefa = async (req, res) => {
    const { id } = req.params

    await tarefasModel.atualizarTarefas(id, req.body)
    return res.status(204).json()
}

module.exports = {
    getAll,
    criarTarefas,
    deletarTarefas,
    atualizarTarefa
}