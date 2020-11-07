const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Comment = sequelize.define('comment', {
        name: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        }
    });

    return Comment;
};
