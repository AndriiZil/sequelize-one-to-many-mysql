const {
    DB, dialect, HOST, PASSWORD, pool, USER
} = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
    operatorsAliases: false,
    pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model')(sequelize);
db.comments = require('./comment.model')(sequelize);

db.tutorials.hasMany(db.comments, { as: 'comments' });
db.comments.belongsTo(db.tutorials, {
    foreignKey: 'tutorialId',
    as: 'tutorial'
});

module.exports = db;
