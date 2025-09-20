import express from 'express';

const app = express();
 app.get("/",(req,res)=>{
    // console.log(req);
    console.log("Get request recieved");
    res.send("Hello from the server");
 }
)



app.listen(5000, () => {
    console.log("server is started");
}
 )