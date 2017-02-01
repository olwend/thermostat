'use strict'

var thermostat;

beforeEach(function() {
    thermostat = new Thermostat();
})

describe('thermostat temperature', function() {
    it('should be set at 20 degrees', function() {
            expect(thermostat._defaulttemp).toEqual(20)
        })
})

describe('increase thermostat temperature', function() {
    it('should increase temp', function() {
        thermostat.increaseTemp();
        expect(thermostat._defaulttemp).toEqual(21)
    })
})

describe('decrease thermostat temperature', function() {
    it('should decrease temp', function() {
        thermostat.decreaseTemp();
        expect(thermostat._defaulttemp).toEqual(19)
    })
})

describe('throws error when minimum temp is reached', function() {
        it('should throw error if minumum temp is reached', function() {
            for (var i = thermostat._defaulttemp; i > thermostat._minimumtemp; i--) {
                thermostat.decreaseTemp();
            }
            expect(function() {
                thermostat.decreaseTemp()
            }).toThrowError("minimum temperature has been reached");
        })
})

describe('Switch PSM on and off', function() {
       it('has power saving mode on by default', function() {
            expect(thermostat.isPowerSavingModeOn()).toBe(true);
        })
        it('Switches off Power Saving Mode', function() {
      thermostat.isPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
        })

describe('When PSM is on', function(){
        it('has maximum temperature of 25 degrees', function(){
          for (var i = thermostat._defaulttemp; i < thermostat._maxPsmThermTemp; i ++){
            thermostat.increaseTemp();

          }
          expect(thermostat.getsdefaulttemp()).toEqual(25);
        })
})
})
