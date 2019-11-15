'use strict';

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['landing']);
  });

  it('can create new instances of Plane', function(){
    expect(plane).toBeInstanceOf(Plane);
  });

  it('can land at an Airport', function(){
    plane.land(airport);
    expect(airport.landing).toHaveBeenCalledWith(plane);
  });

  it('can take off from an Airport', function(){
    plane.takeoff(airport);
    expect(airport.takingOff).toHaveBeenCalledWith(plane);
  });
});