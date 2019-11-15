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

  it('cannot let a plane land if hangger is full', function(){
    var i;
    for(i = 0; i < 10; i++){
      airport.landing(plane);
    }
    expect(function(){
      airport.landing(plane);
    }).toThrowError(`Cannot land: The hanger is full`)
  };

});