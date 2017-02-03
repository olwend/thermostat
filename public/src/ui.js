$(document).ready(function() {
  var thermostat = new Thermostat();


       updateTemperature();

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
        });

        function updateTemperature() {
          $('#currenttemp').text('Current temp ' + thermostat.getCurrentTemperature());
          $('#currenttemp').attr('class', thermostat.energyUsage());
        }

        function updatePowerSaveStatus() {
          if (thermostat.powerSaveStatus === true) {
              var psNow = 'YES'
            } else {
              var psNow = 'NO'
            }
          $('#powersave').text('PowerSave?' + psNow);
          }

});
