/*
server config karna
*/

const express = require('express');
const noteModel = require('./models/noteModel'); 

const app = express();
app.use(express.json());


//post notes
app.post('/notess', async (req, res) => {
    const { title, description } = req.body;

    const note = await noteModel.create({
        title, description
    });

    res.status(201).json({
        message: "note created",
        note
    });
});

//get notes

app.get('/notess', async (req, res) => {
   const note = await noteModel.find();

    res.status(200).json({
        message: "notes fetched successfully",
        note
    });
});

module.exports = app;
