const Sequelize = require('sequelize')

const db = new Sequelize('eqteda', 'root', '1234', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

db.authenticate()
.then(()=>{
    console.log('DB connected')
})
.catch(err => console.log(`Error: ${err}`))


module.exports = db;