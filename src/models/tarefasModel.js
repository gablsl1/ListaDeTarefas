const conexao = require('./conexao')

const getAll = async () => {
    const tarefas = await conexao.execute('SELECT * FROM tarefas')
    return tarefas[0]
}

module.exports = {
    getAll
}