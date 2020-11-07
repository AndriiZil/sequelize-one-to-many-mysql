const { createComment, findCommentById, findAllComments } = require('../services/comment-service');
const { createTutorial, findTutorialById, findAllTutorials } = require('../services/tutorial-service');

exports.createTutorial = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        const tutorial = await createTutorial({ title, description });

        return res.send(tutorial);
    } catch (err) {
        next(err);
    }
}

exports.findTutorialById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const tutorial = await findTutorialById(id);

        return res.send(tutorial);
    } catch (err) {
        next(err);
    }
}

exports.findAllTutorials = async (req, res, next) => {
    try {
        const tutorials = await findAllTutorials();

        return res.send(tutorials);
    } catch (err) {
        next(err);
    }
}

exports.createComment = async (req, res, next) => {
    try {
        const { name, text, tutorialId } = req.body;

        const comment = await createComment(tutorialId, { name, text });

        return res.send(comment);
    } catch (err) {
        next(err);
    }
}

exports.findCommentById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const comments = await findCommentById(id);

        return res.send(comments);
    } catch (err) {
        next(err);
    }
}

exports.findAllComments = async (req, res, next) => {
    try {
        const comments = await findAllComments();

        return res.send(comments);
    } catch (err) {
        next(err);
    }
}
