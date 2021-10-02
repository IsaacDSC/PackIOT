const { monitorLines } = require('../models/monitorLines')

class InLineProcedules {
    async overViewSearch(overviewLine) {
        try {
            const linksInLines = await monitorLines.findAll({
                where: { line: overviewLine, active: true },
                order: [
                    ['ordem', 'ASC']
                ]
            })
            return linksInLines
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async searchByLine(LINE) {
        try {
            const line = await monitorLines.findAll({
                where: { line: LINE },
                order: [
                    ['ordem', 'ASC']
                ]
            })
            return line
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async create(objInLines) {
        try {
            const created = await monitorLines.create(objInLines)
            return created
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async updated(objInLines, id) {
        try {
            const updated = await monitorLines.update(objInLines, { where: { id: id } })
            return updated
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async delete(id) {
        try {
            const deleted = await monitorLines.destroy({ where: { id: id } })
            return deleted
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async EditOrdem(objEdit, id) {
        try {
            const updated = await monitorLines.update(objEdit, { where: { id: id } })
            return updated
        } catch (error) {
            console.log(error)
            return false
        }

    }

    async searchAll() {
        try {
            const search = await monitorLines.findAll()
            return search
        } catch (error) {
            console.log(error)
            return false
        }
    }

}


module.exports = new InLineProcedules