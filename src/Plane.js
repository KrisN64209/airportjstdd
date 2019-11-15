'use strict';

function Plane(){
  Plane.prototype.land = function(airport){
    airport.landing(this);
    this._location = airport
  };
};