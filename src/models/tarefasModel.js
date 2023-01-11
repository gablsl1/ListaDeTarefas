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

const deletarTarefas = async (id) => {
    const [tarefaRemovida] = await conexao.execute('DELETE FROM tarefas WHERE id = ?', [id])
    return tarefaRemovida
}

const atualizarTarefas = async (id, tarefa) => {
    
    const { titulo, status } = tarefa

    const [tarefaAtualizada] = await conexao.execute('UPDATE tarefas SET titulo = ?, status = ? WHERE id = ?', [titulo, status, id])
    return tarefaAtualizada
}

module.exports = {
    getAll,
    criarTarefas,
    deletarTarefas,
    atualizarTarefas
}