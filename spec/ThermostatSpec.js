'use strict';

describe('Thermostat', function() {

    var thermostat;

    beforeEach(function() {
      thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases temperature with up()', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('increases temperature with down()', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum of 10 degrees', function() {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('has power saving on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch PSM off', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch PSM on', function(){
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    describe('when power saving is on', function(){
      it ('has a max temperature of 25 degrees', function(){
        for (var i = 0;  i < 6; i++){
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
    });

    describe('when power saving is off', function(){
      it ('has a max temperature of 32 degrees', function(){
        console.log(thermostat.powerSavingMode);
        thermostat.switchPowerSavingModeOff();
          console.log(thermostat.powerSavingMode);
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        console.log(thermostat.getCurrentTemperature())
        expect(thermostat.getCurrentTemperature()).toEqual(32);
      });
    });

  });
