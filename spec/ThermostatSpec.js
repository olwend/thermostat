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

    it('can switch PSM off and back on again', function(){
      thermostat.switchPSM();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPSM();
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
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
      });
    });

    describe('can reset temperature to 20', function(){
      it('has a temperature of 20 degrees after reset', function(){
        thermostat.up();
        thermostat.reset();
        expect(thermostat.getCurrentTemperature()).toEqual(20);
      });
    });

    describe('displaying usage levels', function(){
      describe('when temperature is below 18 degrees', function(){
        it('it is considered low-usage', function() {
          for (var i = 0; i < 3; i++) {
            thermostat.down();
        }
        console.log(thermostat.getCurrentTemperature())
        expect(thermostat.energyUsage()).toEqual('low-usage');
        });
      });

      describe('when temperature is between 18 and 25 degrees', function(){
        it('it is considered medium-usage', function() {
          console.log(thermostat.getCurrentTemperature())
          expect(thermostat.energyUsage()).toEqual('medium-usage');
        });
      });

      describe('when temperature is over 25 degrees', function(){
        it('it is considered high-usage', function() {
          thermostat.powerSavingMode = false;
          for (var i = 0; i < 6; i++) {
            thermostat.up();
        }
        console.log(thermostat.getCurrentTemperature())
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
