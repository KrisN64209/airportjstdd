'use strict';

function Airport(capacity = 10){
  this._hanger = [];
  this._maxCapacity = capacity;

}

Airport.prototype.hanger = function(){
  return this._hanger;
};

Airport.prototype.landing = function(plane){
  this._hanger.push(plane);
};

Airport.prototype.takingOff = function(plane){
  this._hanger.pop(plane);
};