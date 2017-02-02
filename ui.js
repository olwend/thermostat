$(document).ready(function() {
    varthermostat = new Thermostat();
    console.log(thermostat);

    thermBackground = function() {
           $("#energy-usage").attr("class", thermostat.energyUsage());
           $("#energy-usage").text(thermostat.energyUsage().replace("-usage", " energy usage").toUpperCase());
           $(".thermometer").css("background", "-webkit-linear-gradient(right, #000 0%, #000 " + currentPercent + "%, crimson " + currentPercent + "%, crimson 100%");
       };

       tempDisplay = function() {
           $(".temp").html(thermostat.temperature + "&deg;C");
       };

       updateThermometer = function() {
           thermBackground();
           tempDisplay();
       };

       updateThermometer();

       $(".temp-down").click(function(event) {
           $("#error").text(thermostat.down(1));
           updateThermometer();
       });

       $(".temp-up").click(function(event) {
           $("#error").text(thermostat.up(1));
           updateThermometer();
       });

       $(".temp-reset").click(function(event) {
           thermostat.reset();
           updateThermometer();
       });

       $(".power-savingoff").click(function(event) {
           thermostat.switchPowerSavingModeOff();
               $(".fa-leaf").addClass("ps-off");
               }
       $(".power-savingoff").click(function(event) {
           thermostat.switchPowerSavingModeOn();{
               $(".fa-leaf").addClass("ps-on");
           }
          
       });

   });
