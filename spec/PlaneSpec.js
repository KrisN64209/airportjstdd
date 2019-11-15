'use strict';

describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('can create new instances of Plane', function(){
    expect(plane).toBeInstanceOf(Plane);
  });
});