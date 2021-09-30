class MessagesFlash {
    async success(req, res, message, redirect) {
        req.flash('success_msg', message)
        res.redirect(redirect)
    }
    async error(req, res, redirect) {
        req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
        res.redirect(redirect)
    }
}


module.exports = MessagesFlash