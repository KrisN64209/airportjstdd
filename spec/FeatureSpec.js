'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  }); 

  it('can instruct Planes to land at an Airport', function(){
    plane.land(airport);
    expect(airport.hanger()).toContain(plane);
  });

  it('can instruct Planes to take off from an Airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.hanger()).not.toContain(plane);
  });

});