const express = require('express')

const router = express.Router()

router.get('/v1/tarefas', (req, res) => res.status(200).send('O projeto está funcionando'))

module.exports = router