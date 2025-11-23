import express from 'express';

const app = express();
 
app.get("/", (req,res) => {
    console.log("hello world")

    res.json(
    {
        message: "hello world"
    }
)
});



app.listen(5000, () => {
    console.log("server is started");
}
 ) 