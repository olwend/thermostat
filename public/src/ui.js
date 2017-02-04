$(document).ready(function() {
  var thermostat = new Thermostat();


       updateTemperature();
       updatePowerSaveStatus();



       $('#temp-down').click(function(event) {
           thermostat.down();
           updateTemperature();
       });

       $('#temp-up').click(function(event) {
           thermostat.up();
           updateTemperature();
       });

       $('#temp-reset').click(function(event) {
           thermostat.reset();
           updateTemperature();
       });

       $('#switchPSM').click(function(event) {
           thermostat.switchPSM();
           updatePowerSaveStatus();
           updateTemperature();
        });

        function updateTemperature() {
          $('#currenttemp').text('Current temp ' + thermostat.getCurrentTemperature());
          $('#currenttemp').attr('class', thermostat.energyUsage());
        }

        function updatePowerSaveStatus() {
          if (thermostat.powerSavingMode === true) {
              var psNow = 'YES';
              console.log(psNow);
            } else {
              var psNow = 'NO';
              console.log(psNow);
            }
            console.log(psNow);
          $('#powersave').text((psNow) + ' PowerSave');
          }

});
