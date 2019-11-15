'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('can create new instances of Airport', function(){
    expect(airport).toBeInstanceOf(Airport);
  });

  it('can instruct planes to land', function(){
    airport.landing(plane);
    expect(airport.hanger()).toEqual([plane]);
  });

  it('can instruct planes to take off', function(){
    airport.landing(plane);
    airport.takingOff(plane);
    expect(airport.hanger()).toEqual([]);
  });

  it('hanger has a maximum capacity', function(){
    expect(airport._maxCapacity).toBeDefined()
  });

  it('maximum capacity has a value an creating an instance of Airport', function(){
    expect(airport._maxCapacity).toEqual(10)
  });


  it('cannot let a plane land if hanger is full', function(){
    var i;
    for(i = 0; i < 10; i++){
      airport.landing(plane);
    }
    expect(function(){
      airport.landing(plane);
    }).toThrowError(`Cannot land: The hanger is full`)
  });

});