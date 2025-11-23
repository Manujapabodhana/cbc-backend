import express from 'express';

const app = express();
 
app.get("/", () => {
    console.log("hello world");
});



app.listen(5000, () => {
    console.log("server is started");
}
 )