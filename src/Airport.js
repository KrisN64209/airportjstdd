'use strict';

function Airport(capacity = 10){
  this._hanger = [];
  this._maxCapacity = capacity;

}

Airport.prototype.hanger = function(){
  return this._hanger;
};

Airport.prototype.landing = function(plane){
  if(this._hanger.length < this._maxCapacity){
    this._hanger.push(plane);
  } else {
    throw new Error(`Cannot land: The hanger is full`)
  }
};

Airport.prototype.takingOff = function(plane){
  this._hanger.pop(plane);
};