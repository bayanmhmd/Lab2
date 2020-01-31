'use strict';
// //////////////// refactoring lab-1///////////////////



class Validate {
  constructor(input) {
    this.input = input;

  }

  // isValid(input) {
  //   return (input);
  // }

  // isString (input)  {
  //   return typeof input === 'string';
  // };

  // isNumber  (input)  {
  //   return typeof input === 'number';
  // };

  // isArray (input) {
  //   return Array.isArray(input);
  // };

  isObject  (input)  {
    return typeof input === 'object';
  };

  // isFunction  (input) {
  //   return typeof input === 'function';
  // };


  // isBoolean  (input)  {
  //   if (input === true || input === false);  // this conditon depend if we have two type
  //   return typeof input === 'boolean';
  // };
  // //////////////// objects ////////////

  // // is my object have a keys  or not?!

  // objectKeys (input) {
  //   if (!Object.keys(input)) { return false; };
  //   return true;
  // };

  // what is my type of value in the keys ?!

  typeValues (input){

    if (!Object.values(input)){return false;};
    return Object.values(input).every( inp => typeof inp === 'string' || typeof inp === 'number' || typeof inp === 'object' );

  };

  // i want to check if iside my value there is array and if there null or not

  noValueInArray (input) {
    if (!Object.values(input)) { return false; };       //// Object.values an array
    return Object.values(input).every(value =>  value === 'object' && value.length === 0);
  };

  // i want to check if my keys have a values

  notEmptyValues (input) {
    if (Object.keys(input)) {Object.keys(input).every(value => {
      return this.isObject(value);
    });
    }
    return false;
  };

  //   return Object.values(input).every( inp => typeof inp === 'string' || typeof inp === 'number' || typeof inp ==='object' )

  // };

  valueInArray(input) {
    if (!Object.values(input)) { return false; };
    return Object.values(input).every(value => typeof value === 'string' || typeof value === 'number');
  };
}

class Person extends Validate {
  constructor(input) {
    super(input);
    this.firstName = input.firstName;
    this.lastName = input.lastName;
    this.hair = input.hair;
    this.favoriteFoods = input.favoriteFoods;
    this.married = input.married;
    this.kids = input.kids;
  }
}

// eslint-disable-next-line no-undef
module.exports = { Validate, Person, };
