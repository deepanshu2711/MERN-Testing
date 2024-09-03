import express from "express";
import { prisma } from "./db";
export const app = express();


app.use(express.json());


app.post("/sum", async (req, res) => {
  const { a, b } = req.body;

  const ans = a + b;

  await prisma.sum.create({
    data: {
      a, b, result: ans
    }
  })

  res.json({
    ans: ans
  })
})

app.post("/mul", (req, res) => {
  const { a, b } = req.body;

  const ans = a * b;
  res.json({
    ans: ans
  })
})


