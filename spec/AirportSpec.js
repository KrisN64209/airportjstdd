'use strict';

describe('Airport', function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it('can create new instances of Airport', function(){
    expect(airport).toBeInstanceOf(Airport);
  });
});