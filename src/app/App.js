const express = require('express')
const bodyParser = require('body-parser')
const router = require('../routes/Routes')
const hbs = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const flash = require('express-flash')
const cors = require('cors')
const { sequelize } = require('../database/settings/ConnSequelize')

const LinesProcedules = require('../database/procedules/LinesProcedules')

const passport = require('passport')
require('../middlewares/checkCredencials')(passport)


class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.session()
        this.flash()
        this.passport()
        this.routes()
        this.engine()
            //this.database()
    }
    middlewares() {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
        this.express.use(express.static(path.join(__dirname, '../', 'public')))
        this.express.use(cors())
        this.express.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*"); //The ionic server
            next();
        });
    }
    session() {
        this.express.use(session({
            secret: process.env.SECRETKEY_SESSION || 'somesecrettoken',
            resave: true,
            saveUninitialized: true
        }))
    }
    flash() {
        this.express.use(flash())
        this.express.use((req, res, next) => {
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.message = req.flash('message')
            res.locals.error = req.flash('error')
            next()
        })
    }
    passport() {
        this.express.use(passport.initialize())
        this.express.use(passport.session())
    }
    async routes() {
        this.express.use(router)
        this.express.use(async(req, res, next) => {
            const lines = await LinesProcedules.searchAll()
            res.render('404/NotFound', { layout: 'NotFound.hbs', lines })
        })
    }
    engine() {
        this.express.engine('hbs', hbs({
            defaultLayout: 'main.hbs',
            extname: 'hbs',
            helpers: {
                ifEquals: function(arg1, arg2, options) {
                    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
                },
                replace: function(find, replace, options) {
                    var string = options.fn(this);
                    return string.replace(find, replace);
                },
            }
        }));
        this.express.set('view engine', 'hbs');
        this.express.set('views', path.join(__dirname, '../', '/views/'))
    }
    database() {
        // authenticate with the database

        sequelize
            .authenticate()
            .then(function(err) {
                console.log("Connection established.");
            })
            .catch(function(err) {
                console.log("Unable to connect to database: ", err);
            });
    }
}
module.exports = new App().express