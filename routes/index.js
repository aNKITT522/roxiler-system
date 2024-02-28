const express = require("express");
const mainRouter = express.Router();
const index = require('../controllers/index')

mainRouter.get('/',(req,res)=>{
    res.send('Hello World!')
});

mainRouter.get("/searchh" ,index.homeScr);
mainRouter.post("/searchh" ,index.homeScrPost);


mainRouter.get("/transaction" , (req,res) => {
        res.send({message : "Hello home!"})
    })
mainRouter.get("/statistic" , (req,res) => {
        res.send({message : "Hello statistic !"})
    })
    
mainRouter.get("/piechart" , (req,res) => {
        res.send({message : "Hello piechart!"})
    })
mainRouter.get("/barchart" , (req,res) => {
        res.send({message : "Hello barchart!"})
    })




module.exports=mainRouter;