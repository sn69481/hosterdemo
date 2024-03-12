require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db=require("./models/index");

const studentRoutes= require('./routes/studentRoutes');

const app=express();
const port = process.env.PORT;

app.use(cors({origin: "http://localhost:3000"}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/students',studentRoutes)

app.get("/api/home",(req,res)=>res.send("hijndn"));

db.sequelize.sync({force: true})
  .then(() => {
    console.log("Synced db.");
    app.listen(port,()=>{
        console.log(`server listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.log(err);
    console.log("Failed to sync db: " + err.message);
  });

