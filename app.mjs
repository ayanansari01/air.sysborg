import express from "express"
const app = express();
const port = process.env.PORT || 3000;


app.get("/profile",(req,res) => {
console.log("aur bhae");
res.send("hallo");
});

app.listen(port,() => {
    console.log("12345");
});