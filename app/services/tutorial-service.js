const db = require('../models');
const Tutorial = db.tutorials;

module.exports = {

    findAllTutorials: async () => {
        try {
            return await Tutorial.findAll({ include: ['comments'] });
        } catch (err) {
            console.log(err);
        }
    },

    createTutorial: async (tutorial) => {
        try {
            const { title, description } = tutorial;

            return Tutorial.create({ title, description });
        } catch (err) {
            console.log(err);
        }
    },

    findTutorialById: async (tutorialId) => {
        try {
            return Tutorial.findByPk(tutorialId, { include: ['comments'] });
        } catch (err) {
            console.log(err);
        }
    }

}
