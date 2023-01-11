const conexao = require('./conexao')

const getAll = async () => {
    const [tarefas] = await conexao.execute('SELECT * FROM tarefas')
    return tarefas
}

const criarTarefas = async (tarefa) =>  {
    const { titulo } = tarefa
    const data = new Date(Date.now()).toUTCString()

    const [tarefaCriada] = await conexao.execute('INSERT INTO tarefas (titulo, status, criada_em) VALUES (?, ?, ?)', [titulo, 'Pendente', data])

    return {insertId: tarefaCriada.insertId}
}

module.exports = {
    getAll,
    criarTarefas
}