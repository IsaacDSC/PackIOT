const Account = require('../models/accounts')
const bcrypt = require('bcrypt')


class AccountsPorcedules {
    async create(username, email, password) {
        try {
            const hash = await bcrypt.hash(password, 10)
            const created = await Account.create({
                username: username,
                email: email,
                password: hash
            })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async update(ObjectModify, ObjectWhere) {
        try {
            const updated = await Account.update({ ObjectModify }, { where: ObjectWhere })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async delete(ObjectWhere) {
        try {
            const deleted = await Account.delete({ where: ObjectWhere })
            return deleted
        } catch (error) {
            return false
        }
    }
    async search(ObjectWhere) {
        try {
            const searchAlls = await Account.findAll({ where: ObjectWhere })
            return searchAlls
        } catch (error) {
            console.log(error)
            return false
        }
    }

}


module.exports = new AccountsPorcedules