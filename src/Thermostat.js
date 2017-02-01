'use strict'

function Thermostat(){
  this._defaulttemp = 20
  this._minimumtemp = 10
<<<<<<< HEAD
  this.powerSavingMode = true
=======
>>>>>>> c689e639efc0445348ba7944bcf1d9bf948f7736
};

Thermostat.prototype.increaseTemp = function() {
  return this._defaulttemp += 1;
}

Thermostat.prototype.decreaseTemp = function(){
  if (this._defaulttemp <= this._minimumtemp){
    throw new Error("minimum temperature has been reached")
  }else{
    return this._defaulttemp -= 1;
  }

<<<<<<< HEAD
}

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;

=======
>>>>>>> c689e639efc0445348ba7944bcf1d9bf948f7736
}
