import express from "express"

//if we want to write tests in express app we don't do app.listen because we want the liberary to figer out the routes automatically
// we dont want to start a server when testing
//we use supertest liberary which helps you to send http requests and get the response without starting a server.

//we can also use app.linten here and test using axios ,  but supertest liberary in better

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

