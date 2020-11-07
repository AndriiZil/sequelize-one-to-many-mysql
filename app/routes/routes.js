module.exports = app => {

    const Controller = require('../controllers/controllers');
    const router = require('express').Router();

    router.get('/test', (req, res) => res.send('ok'));

    router.post('/tutorials', Controller.createTutorial);

    router.get('/tutorials', Controller.findAllTutorials);

    router.get('/tutorials/:id', Controller.findTutorialById);

    router.post('/comments', Controller.createComment);

    router.get('/comments', Controller.findAllComments);

    router.get('/comments/:id', Controller.findCommentById);

    app.use('/api', router);

};
