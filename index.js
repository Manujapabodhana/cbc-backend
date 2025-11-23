import express from 'express';

const app = express();

app.use(express.json());
 
app.get("/", (req,res) => {
    console.log(req.body);
    console.log("Get request received");

    let prefix="Mr"
    if(req.body.gender == "female"){
        prefix="Ms"
    }
    

    res.json(
    {
        message: "hello "+ prefix + " " + req.body.name
    }
)
});



app.listen(5000, () => {
    console.log("server is started");
}
 ) 