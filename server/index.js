const express=require("express")
const app=express();
const db=require("./config/db.js")

app.use(express.json())

const cors=require("cors")
app.use(cors())
 /*
const bodyParser=require("body-parser");
const { urlencoded } = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
*/

app.post("/api/create",(req,res)=>{
    const username=req.body.username;
    const title=req.body.title;
    const text=req.body.text;

    db.query(
        "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username],(err,result)=>{
           if(err){
               console.log(err)
           }
           console.log(result)
        })
})

app.post("/api/like/:id",(req,res)=>{
    const id=req.params.id;
    
    db.query(
        "UPDATE posts SET likes =likes + 1 WHERE id=?", id, (err,result)=>{
           if(err){
               console.log(err)
           }
           console.log(result)
        })
})

app.get("/api/get",(req,res)=>{

    db.query(
        "SELECT * FROM posts",(err,result)=>{
           if(err){
               console.log(err)
           }
           res.send(result)
        })
})
app.get("/api/getById/:id",(req,res)=>{
    const id=req.params.id
    db.query(
        "SELECT * FROM posts WHERE id = ?",id,(err,result)=>{
           if(err){
               console.log(err)
           }
           res.send(result)
        })
})
app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})