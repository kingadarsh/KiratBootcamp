const express=require("express");

const app=express();
const {z}=require('zod');

const CreateTodoSchema=z.object({
    title:z.string().min(1).max(250),
    desc:z.string()
});

const note=[]

app.use(express.json())

app.post('/notes',(req,res)=>{
    try{
        const {data,success}=CreateTodoSchema.safeParse(req.body);

        if(!success){
            res.send("There was an error in the input");
        }
        console.log(data);
        // const {desc}=data;
        // const {title}=data;

        note.push(data);
        
        res.status(200).json({
            success:true,
            message:"Notes created successfully",
            data:[]
        })

    }
    catch(err){
        console.error(err.message);
    }

})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Notes fetched successfully",
        data:note
    })
})

app.listen(3000,()=>{
    console.log("Server running on port http://localhost:3000/")
})