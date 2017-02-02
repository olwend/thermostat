'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.powerSavingMode = true;
  this.DEFAULT_TEMPERATURE = 20;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaxTemp()){
    return;
  }
  this.temperature += 1;
  console.log(this.temperature);
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

Thermostat.prototype.reset = function(){
  return this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature > this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature < this.MAX_TEMP_PSM_ON){
    return 'medium-usage';
  }
   return 'high-usage';

}
