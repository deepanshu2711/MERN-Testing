//jest by default will go through your conplete sourse folder and look for files end with .test.ts and try to look for test there.

// before jest how we write test
import { sum , sub } from '../index';

// if(sum(1,2)!==3){
//     throw new Error('sum is not working');
// }


import {describe , expect ,it} from "@jest/globals"

//to run all tests we need to use the command  , npm run test


//describe is a function that takes a string and a function as arguments
//there we describe that we will write all the tests for the sum function here
describe('sum function', () => {
    //it is a function that takes a string and a function as arguments
    //it is used to write a single test
    //if the function returns true then the test is considered passed
    //if the function returns false then the test is considered failed
    it('adds 1 + 2 to equal 3', () => {
        //we are using expect to check if the sum function returns the correct value
        expect(sum(1,2)).toBe(3);
    });

    it('adds 2 + 2 to equal 4', () => {
        expect(sum(2,2)).toBe(4);
    });

});

describe('sub function', () => {
    it('subtracts 2 - 1 to equal 1', () => {
        expect(sub(2,1)).toBe(1);
    });
});


