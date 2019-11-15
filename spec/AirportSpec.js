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
});