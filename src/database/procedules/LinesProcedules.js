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
}

module.exports = new LinesProcedules