import { describe, it, expect, vi } from "vitest";
import { app } from "../index";
import request from "supertest";



//vi is used to mock external services
//we said that ../db.ts this file should export this 
//vi.fn() this is an emply function
//we want the prisma client that this file id exporting should be like this


//the problem with this is that as your object become bigger you will have to add other things
//like if we created a user object we need to mock its create, findone etc also which make this moke bigger 


//to prevent this vitest let you do deep mocking
vi.mock("../db.ts")


describe("testing all routes", () => {
  describe("testing /sum routes", () => {
    it("should resturn sum of two numbers", async () => {
      const res = await request(app).post('/sum').send({ a: 10, b: 20 })
      expect(res.body.ans).toBe(30)
    })

  })
  describe("testing /mul routes", () => {
    it("should return mul of two numbers", async () => {
      const res = await request(app).post('/mul').send({ a: 10, b: 20 })
      expect(res.body.ans).toBe(200)
    })

  })
})

