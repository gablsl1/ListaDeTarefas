const tarefasModel = require('../models/tarefasModel')

const getAll = async (req, res) => {

    const tarefas = await tarefasModel.getAll()

    return res.status(200).json(tarefas)
}

module.exports = {
    getAll
}