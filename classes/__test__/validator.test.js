/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
'use strict';
////////////////////////////////////


const personValidator = require('../../lib/validator.js');

const data = require('../../data/data.json');

let person = new personValidator.Person(data);

describe('validator module performs complex validations', () => {


  it('validates all “required” properties present and do they have values?', () => {
    // i.e. person.name must be a string, etc.
    expect(typeof person.firstName).toEqual('string');
    expect(typeof person.lastName).toEqual('string');
    expect(typeof person.hair).toEqual('object');
    expect(typeof person.married).toEqual('boolean');
    expect(typeof person.kids).toEqual('number');
    expect(Array.isArray(person.favoriteFoods)).toBeTruthy();
    // expect(true).toBeFalsy();
  });


});
describe('validator module performs complex validations', () => {



  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(person.notEmptyValues(data)).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(person.typeValues(data)).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(person.valueInArray(data)).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(person.noValueInArray(data)).toBeFalsy();
  });
});



