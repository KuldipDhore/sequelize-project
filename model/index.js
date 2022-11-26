const Sequelize = require('sequelize');

const sequelize = new Sequelize('userdata', 'root', '', { host: 'localhost', dialect: 'mysql' })

sequelize.authenticate().then(() => {
    console.log('connected with DB');
}).catch(err => {
    console.log('unable to connect with DB', err);
})

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require('./users.model')(sequelize, Sequelize);
db.dept = require('./dept.model')(sequelize, Sequelize);
module.exports = db;