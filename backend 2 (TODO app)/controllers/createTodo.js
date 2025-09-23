const { create } = require("../models/todo");
const Todo = require("./models/Todo");

exports.createTodo = async(req,res) =>{
    try{

        const {title,description} = req.body;

        const response = await Todo.create({title,description});
        //send a json response with sucess flag
        res.stauts(200).json(
            {
                success:true,
                data:response,
                message:'entry created sucessfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.stauts(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}

