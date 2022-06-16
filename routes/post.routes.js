const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller');

router.post('/post', postController.createPost); //создание строки в таблице
router.get('/post', postController.getPosts); //получение всех строк
router.get('/post/:id', postController.getOnePost); //получение одной строки
router.delete('/post/:id', postController.deletePost); //удаление строки

module.exports = router;
