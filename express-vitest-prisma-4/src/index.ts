import express from "express";
import { prisma } from "./db";
export const app = express();


app.use(express.json());


app.post("/sum", async (req, res) => {
  const { a, b } = req.body;

  const ans = a + b;
  //if we want id of this sum in responce and 
  //want to test it we can not get the id because this database call is mocked 
  //we only test the outputs to the mocked functions by doing mockResolvedValue
  //but what if we also want to test the inputs to the mocked request
  //ie like if i change value of a as a+10 and then run the tests they will still succeed
  //mock(mock let you mock the fuctionality of the function)
  // to prevent this we use spys (it lets you spy on the function)
  const responce = await prisma.sum.create({
    data: {
      a, b, result: ans
    }
  })

  //during testing  = > 
  //const res = vi.mock()  which return an empty function so we can not get id
  //if we run this now during testing this will throw error or test case will fail
  // => to provent this we also need to return a mocked return value
  res.json({
    ans: ans,
    id: responce.id
  })
})

app.post("/mul", (req, res) => {
  const { a, b } = req.body;

  const ans = a * b;
  res.json({
    ans: ans
  })
})


