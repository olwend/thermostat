'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaxTemp()){
    return;
  }
  console.log(this.temperature);
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this.isMinTemp()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinTemp = function(){
  return this.temperature === this.MIN_TEMP;
}

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
}

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingModeOn()=== false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
}
