const express=require("express")
const app=express()

app.use(express.json())

const notes=[]

//post /notes
app.post("/notes",(req,res)=>{
    
    notes.push(req.body)
    res.status(201).json({
        message:"Note created successfully"
    })
})

//get /notes
app.get("/notes",(req,res)=>{
    
    notes.push(req.body)
    res.status(200).json({
        notes:notes
    })
})

//delete /notes
app.delete("/notes/:idx",(req,res)=>{
    
    notes.splice(req.params.idx,1)
    res.status(204).json({
        message:"note deleted successfuly"
    })
})

//patch /notes

app.patch("/notes/:idx",(req,res)=>{
    
    if(notes[req.params.idx]){
        notes[req.params.idx].description=req.body.description
    }

    res.status(200).json({
        message:"note updated successfuly"
    })
})
module.exports=app