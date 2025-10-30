import express from "express"

const app = express();

app.get('/', (req,res) => { 
    res.send("intial")
})

app.listen(3000, () => {
    console.log("server running...")
})