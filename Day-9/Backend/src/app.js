// server ko config karna

const express=require("express");
const noteModel=require("./models/note.models");
const app=express();
const cors=require("cors");
const path=require('path');

app.use(express.json());
app.use(express.static('./public'));
app.use(cors());

//post
app.post('/api/notes', async (req, res) => {

    console.log(req.body);   // <-- ADD THIS

    const { title, description } = req.body;

    const note = await noteModel.create({
        title,
        description
    });

    res.status(201).json({
        message: "note created",
        note
    });
});

//get
app.get('/api/notes', async (req, res) => {

    const note = await noteModel.find();

    res.status(200).json({
        message: "note fetched successfully",
        note
    });
});
//delete
app.delete('/api/notes/:id', async (req, res) => {

    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message: "note deleted successfully"
    });
});
//patch
app.patch('/api/notes/:id', async (req, res) => {

    const id = req.params.id;
    const {description}= req.body;
    await noteModel.findByIdAndUpdate(id,{description});
    res.status(200).json({
        message: "note updated successfully"
    });
});

//handles that api which you have not created
app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname, "..","/public/index.html"))
})

module.exports=app;