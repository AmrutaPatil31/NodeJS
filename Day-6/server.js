const app=require('./src/app');
const mongoose=require('mongoose');

function connectToDatabase(){
    mongoose.connect('mongodb+srv://amruta:amu1231@cohort.grj6voj.mongodb.net/Day-6')
    .then(()=>{
        console.log('connected to DB');
        
    })
}
connectToDatabase();
app.listen(3000,()=>{
    console.log("server running on port 3000");
    
})