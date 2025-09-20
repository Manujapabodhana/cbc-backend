import express from 'express';

const app = express();
 app.get("/",
 ()=>{
    console.log("Get request recieved")
 }
)



app.listen(5000, () => {
    console.log("server is started");
}
 )