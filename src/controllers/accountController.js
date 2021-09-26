const AccountsProcedules = require("../database/procedules/AccountsProcedules")
const passport = require('passport')

class AccountController {
    async index(req, res) {
        const accounts = await AccountsProcedules.search()
        res.render('accounts/login')
    }
    async account(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/account',
            failureFlash: true
        })(req, res, next)
    }
    async update(req, res) {

    }
    async delete(req, res) {

    }
    async create(req, res) {
        const created = await AccountsProcedules.create('Administrador', 'admin@admin.com', 'Inbatch1q2w3e')
        if (created) res.json({ created: created, message: 'Registrado com sucesso' })
        else res.json({ message: 'Houve um problema!' })
    }

}


module.exports = new AccountController