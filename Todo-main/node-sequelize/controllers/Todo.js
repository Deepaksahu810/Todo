const todo = require('../models').Todo;

module.exports = {
    Todolist: async (req, res) => {
        try{
            const Todo = await todo.findAll({})
            res.status(200).send(Todo)
        }catch{
            return res.status(500).json({msg: "something went wrong "})
        }
    },
    Todoadd:async(req,res)=>{
        try{
            const NewTodo = await todo.create({
                title: req.body.title,
                description: req.body.description,
                status:req.body.status
              })
            res.status(200).send(NewTodo)
        }catch{
            return res.status(500).json({msg: "something went wrong "})
        }
    },
    TodoUpdate:async(req,res)=>{
        try{
            const { title, description, status } = req.body
            const CheckTodo = await todo.findByPk(req.params.id)
            if(!CheckTodo){
                return res.status(404).send({
                    message: 'Todo Not Found',
                  });
            }
            CheckTodo.title = title
            CheckTodo.description = description
            CheckTodo.status = status

            await CheckTodo.save()
            res.status(200).send(CheckTodo)
            
        }catch{
            return res.status(500).json({msg: "something went wrong "})
        }
    },TodoDelete:async(req,res)=>{
        try{

            const deleteTodo = await todo.findByPk(req.params.id)
            if(!deleteTodo){
                return res.status(404).send({
                    message: 'Todo Not Found',
                  });
            }
            await deleteTodo.destroy()
            res.status(200).json({msg: "Todo delete"})
        }catch{
            return res.status(500).json({msg: "something went wrong "})
        }
    },
    TodoById:async(req,res)=>{
        try{
           
            const getById = await todo.findByPk(req.params.id)
            if(!getById){
                return res.status(404).send({
                    message: 'Todo Not Found',
                  });
            }
            res.status(200).send(getById)
        }catch{
            return res.status(500).json({msg: "something went wrong "})
        }
    }

    
}