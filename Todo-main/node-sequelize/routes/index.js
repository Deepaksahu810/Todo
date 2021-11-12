var express = require('express');
var router = express.Router();
const TodoController = require('../controllers').Todo;

router.get('/api/Todo', TodoController.Todolist);
router.post('/api/NewTodo', TodoController.Todoadd);
router.get('/api/getTodoById/:id', TodoController.TodoById);
router.put('/api/UpdateTodo/:id', TodoController.TodoUpdate);
router.delete('/api/DeleteTodo/:id', TodoController.TodoDelete);




module.exports = router;
