const app = require('./app/App');

const port = 80
const { initialize } = require('./database/initialize/initialize')
    //account.sync({ force: true })
initialize(false)



app.listen(process.env.PORT || port, () => {
    console.log('starter server in port: http://127.0.0.1:' + port)
});