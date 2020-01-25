
'use strict';

/////////////////////////////////// Vehicle Class ///////////////////////////
class Vehicle {

    constructor(name, wheels) {

        this.name = name;          
        this.wheels = wheels;
    }

    drive() 
    {
        return 'Moving Forward';
    }

    stop() 
    {
        return 'Stopping';
    }
} 


//////////////////////////////////////////// Car Class ///////////////////////////////////////////
class Car extends Vehicle {

    constructor(name, wheels) {

        super(name, 4);        //Now  we use SUPER to be able to use methods in Vehicle Class
        
    }
    run() 
    {
        super.drive();
        super.stop();
    }

   
}


///////////////////////////////////////////// Motorcycle Class ///////////////////////////////////
class Motorcycle extends Vehicle {

    constructor(name, wheels) {
       
        super(name, 2);
    }

    
    run() 
    {
        super.drive();
        super.stop();
    }

    

    wheelie() 
    {
        return 'Wheee!';
    }
} 

module.exports = { Car, Motorcycle };