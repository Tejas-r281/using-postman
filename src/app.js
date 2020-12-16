const { json } = require("express");
const express =require("express");
require("../src/db/conn");
const MesnRanking= require("../src/models/mens")
const app=express();
const port= process.env.PORT ||3000;
app.use(express.json())
app.get("/",async(req,res)=>{
    res.send(" this from thapa technical")
})
app.post("/mens",async(req,res)=>{
    try {
        console.log(req.body)
        const addingMensRecords= new MesnRanking(req.body);
        const result =await addingMensRecords.save();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get("/mens",async(req,res)=>{
    try {
        const result =await MesnRanking.find({});
        res.status(201).send(result);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.listen(port,()=>{
    console.log(`connection is live at port no  ${port}`);
})