const express=require ("express");
const { createtodo, updatetodo } = require("./types");
const { todo } = require("./db");
const cors=require("cors");
const app=express();
const port=4000;
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin:"http://localhost:4000"
// }));



app.get("/todos", async (req,res)=>{
    const todos=await todo.find({});
    res.json({
        todos
    })
    
})
app.post("/todo",async (req,res)=>{
   const createpayload=req.body;
   const parsedpayload=createtodo.safeParse(createpayload);
   if(!parsedpayload.success){
    res.json({
        msg:"you had sent wrong input"
    })
    return;
   }

   await todo.create({
    title:createpayload.title,
    description:createpayload.description,
    completed:false
   })

   res.json({
    msg:"todo created successfully."
   })
})
app.put("/completed",async (req,res)=>{
    const updatepayload=req.body;
    const parsedpayload=updatetodo.safeParse(updatepayload);
    if(!parsedpayload.success){
     res.json({
         msg:"you had sent the wrong input"
     })
     return;
    }

    const userid=await todo.findOne({
        _id:updatepayload._id
    })
   
   try{
     if (userid){
        if (userid.completed==false){
        await todo.updateOne({
            _id:updatepayload._id
        },
        {
            completed:true
        }
        )
    res.json({
        msg:"todo marked as done."
})}
    else {
        await todo.updateOne({
            _id:updatepayload._id
        },
        {
            completed:false
        }
        )
    res.json({
        msg:"todo marked as undone."
})
    }
     }
     else{
        res.status(400).json({
            msg:"Invalid ID"
        })
     }
    }
    catch(e){
        res.status(404).json({
            msg:e
        })
    }

})
app.listen(port,()=>{
    console.log("server is live")
})
