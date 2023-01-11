const validarFieldTitulo = (req, res, next) => {
    const { body } = req

    if (body.titulo === undefined) {
        return res.status(400).json( {mensagem: 'The field "titulo" is required '} )
    }

    if (body.titulo === '') {
        return res.status(400).json( {mensagem: 'The field "titulo" cannot be empty '} )
    }

    next()
}

const validarFieldStatus = (req, res, next) => {
    const { body } = req

    if (body.status === '') {
        return res.status(400).json( {mensagem: 'The fild "status" is required'})
    }

    next()
}

module.exports = {
    validarFieldTitulo,
    validarFieldStatus
}