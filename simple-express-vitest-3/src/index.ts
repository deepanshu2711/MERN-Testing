import express from "express"


export const app = express()

app.use(express.json())


app.post('/sum', (req, res) => {
    const {a, b} = req.body;
    const ans = a + b;
    res.json({ans}).status(200)
})

app.post('/mul', (req, res) => {
    const {a, b} = req.body;
    const ans = a * b;
    res.json({ans}).status(200)
})

