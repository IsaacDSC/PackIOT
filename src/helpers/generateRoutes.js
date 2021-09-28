//procedules from create router lines
const LinesProcedules = require('../database/procedules/LinesProcedules')
const { monitorLines } = require('../database/models/monitorLines')


const insertRouterLines = async(router) => {
    try {
        const lines = await LinesProcedules.searchAll()
        lines.forEach(element => {
            const strLine = element.name.replace(/\s/g, '');
            router.get(`/overview/${strLine}`, async(req, res) => {
                const linksInLines = await monitorLines.findAll({
                    where: { line: element.name, active: true },
                    order: [
                        ['ordem', 'ASC']
                    ]
                })
                res.render('home/index', { layout: 'lines.hbs', lines: linksInLines })
            })
        });
    } catch (error) {
        console.log(error)
        router.get('/Error', (req, res) => res.json({ status: 404, message: 'Error function insertRouterLines ' }))
    }
}


module.exports = { insertRouterLines }