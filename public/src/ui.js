$(document).ready(function() {
  var thermostat = new Thermostat();


       updateTemperature();
       updatePowerSaveStatus();

       function displayWeather(city) {
         var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
         var token = '&appid=69638d45e969469d756d603cbf4447e9';
         var units = '&units=metric';
         $.get(url + token + units, function(data) {
           $('#current-temperature').text(data.main.temp + ' degrees celsius ');
         });
       };

       displayWeather('Oakham');

       $('#select-city').submit(function(event) {
         event.preventDefault();
         var city = $('#current-city').val();
         displayWeather(city);
       });


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
