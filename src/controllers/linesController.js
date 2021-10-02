const InlineProcedules = require('../database/procedules/InlinesProcedules')

class OverviewLinesController {

    async index(req, res) {
        const linksInLines = await InlineProcedules.overViewSearch(req.params.line)
        if (linksInLines) res.render('home/index', { layout: 'lines.hbs', lines: linksInLines })
        else res.redirect('/notfound')
    }

}



module.exports = new OverviewLinesController