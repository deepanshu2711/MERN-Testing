import {describe , it , expect} from "@jest/globals"
import {app} from "../index"
import request from "supertest"

describe("testing all the routes" , () => {

    describe("testing /sum route" , () => {
        it("should return sum of two numbers" , async() => {
            const responce = await request(app).post("/sum").send({a:10 , b:20})
            expect(responce.status).toBe(200)
            expect(responce.body.ans).toBe(30)
        })   
        it("should return sum of two negative numbers" , async() => {
            const responce = await request(app).post("/sum").send({a:-1 , b:-2})
            expect(responce.status).toBe(200)
            expect(responce.body.ans).toBe(-3)
        })   
    })

    describe("testing /mul route" , () => {
        it("should return multiplication of two numbers" , async() => {
            const responce = await request(app).post("/mul").send({a:10 , b:20})
            expect(responce.status).toBe(200)
            expect(responce.body.ans).toBe(200)
        })   
        it("should return sum of two zeros" , async() => {
            const responce = await request(app).post("/mul").send({a:0 , b:0})
            expect(responce.status).toBe(200)
            expect(responce.body.ans).toBe(0)
        })   
    })


})