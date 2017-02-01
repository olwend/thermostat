'use strict'

function Thermostat(){
  this._defaulttemp = 20
  this._minimumtemp = 10
  this.powerSavingMode = true
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

}

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;

}
