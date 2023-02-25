import express from "express";

const app = express()

app.get('/api/buba-gump/:move', (req, res)=>{
    const { move } = req.params;

    if (move === "ping") {
        return res.send({message: 'pong'});
    }

    if (move === "pong") {
        return res.send({message: 'ping'});
    }
})

app.listen(3000);