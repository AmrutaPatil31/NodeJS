const express=require('express')

const app=express()

/*app.get('/',(req,res)=>{
    res.send("Home Page");
    
});

app.get('/about',(req,res)=>{
    res.send("About Page");
    
});


const notes=[
    {
        title:"test title 1",
        description:"test description 1"
    },
    {
         title:"test title 2",
        description:"test description 2"
    }
];
*/

const notes=[]
app.use(express.json())
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.send("notes created");
})

app.get('/notes',(req,res)=>{
    res.send(notes)
})

app.listen(3000,()=>{
    console.log("server running on 3000");
    
})