const express=require("express")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello world");
})

const notes=[]

// post notes
app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.send("note created")
})

// get notes
app.get("/notes",(req,res)=>{
    res.send(notes)
})

// delete notes
app.delete("/notes/:index",(req,res)=>{
    notes.splice(req.params.index,1)
    res.send("notes deleted successfully")
    console.log(req.params.index)
})

// patch notes
app.patch("/notes/:index",(req,res)=>{
    if(notes[req.params.index]){
        notes[req.params.index].description=req.body.description
    }
    res.send("notes updated")
})

module.exports=app
