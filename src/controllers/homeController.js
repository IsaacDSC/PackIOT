class HomeController {
    async index(req, res) {
        res.redirect('/settings')
    }
}


module.exports = new HomeController