const db = require('../models');
const Comment = db.comments;

module.exports = {

    createComment: async (tutorialId, comment) => {
        try {
            const { name, text } = comment;

            return Comment.create({ name, text, tutorialId });
        } catch (err) {
            console.log(err);
        }
    },

    findCommentById: async (id) => {
        try {
            return Comment.findByPk(id, { include: [ 'tutorial' ]});
        } catch (err) {
            console.log(err);
        }
    },

    findAllComments: async () => {
        try {
            return Comment.findAll({ include: ['tutorial'] })
        } catch (err) {
            console.log(err);
        }
    }


}
