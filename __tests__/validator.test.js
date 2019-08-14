'use strict';

const validator = require('../lib/validator')


describe('Is this a positive number?',() => {

  it('Checks to see if the number is, in fact positive', () => {
    expect(validator.isPosNum(-1)).toBeFalsy();
    expect(validator.isPosNum(0)).toBeFalsy();
    expect(validator.isPosNum(10)).toBeTruthy();
    expect(validator.isPosNum(' ')).toBeFalsy();
  });

});

describe('Returns an Array of Even Numbers', () => {
  it('Checks for even numbers', () => {
    expect(validator.isEvenArr([2, 4, 6, 8, 10])).toBeTruthy();
    expect(validator.isEvenArr([1,3,5,7,9])).toBeTruthy();
    expect(validator.isEvenArr([-1, -3, -5])).toBeTruthy();
  });
});

describe('Am I an Object?', () => {
  it('Checks the type of Object', () => {
    expect(validator.isObj({})).toBeTruthy();
    expect(validator.isObj(5)).toBeFalsy();
    expect(validator.isObj(true)).toBeFalsy();
    expect(validator.isObj([100])).toBeTruthy();
    expect(validator.isObj(1+5)).toBeFalsy();
  });
});

describe('THis Object Has Property', () => {
  it('Checks The Prop Values of an object', () =>{
    let hair = {
      cut: 'string',
      length: 'number',
      color: [],
      bald: false,
    };
    
    expect(validator.objHas(hair)).toBeTruthy();
    expect(validator.objHas('')).toBeFalsy();
    expect(validator.objHas(2)).toBeFalsy();
  });
});







