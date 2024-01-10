const mongoose = require("mongoose")
const { boolean } = require("zod")

mongoose.connect("mongodb+srv://admin:soni@cluster0.zvz87gg.mongodb.net/todo-application")

const todoschema=mongoose.Schema({
 title:String,
 description:String,
 completed:Boolean
})

const todo=mongoose.model('todos',todoschema)

module.exports={
    todo
}