const mysql=require("mysql")

const db =mysql.createConnection({
    host:"localhost",
    user:"kepha",
    password:"Password123@#",
    database:"BlogPost",
})
module.exports=db;