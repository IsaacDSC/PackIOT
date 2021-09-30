class MessagesFlash {
    async success(req, res, redirect) {
        req.flash('success_msg', 'Registrado com sucesso')
        res.redirect(redirect)
    }
    async error(req, res, message, redirect) {
        req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
        res.redirect(redirect)
    }
}


module.exports = MessagesFlash