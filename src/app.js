const express = require('express')

const app = express()

app.get('/v1/tarefas', (req, res) => res.status(200).send('Projeto'))

module.exports = app