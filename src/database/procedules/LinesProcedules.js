const { LinesProductions } = require('../models/linesProductions')

class LinesProcedules {
    async searchAll() {
        try {
            const lines = await LinesProductions.findAll()
            return lines
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async create(name, link) {
        try {
            const created = await LinesProductions.create({ name, link })
            return created
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async delete(id) {
        try {
            const deleted = await LinesProductions.destroy({ where: { id: id } })
            return deleted
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports = new LinesProcedules