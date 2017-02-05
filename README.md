
Learning Goals
--------------
Thermostat is my first Javascript project and chance to use Jasmine test framework, plus JQuery AJAX calls to an API, to dynamically update the application.

It builds upon my first use of Sinatra and CSS/Html whilst extending my familiarity with a TDD object oriented approach.

Future work is to extend the test coverage for UI elements with Karma and Selenium for multi browser compatibility checks. Currently Jasmine tests the back end business logic.

Installation
------------
Javascript is a lightweight interpreted programming language, thus installation is simple. Just download or clone the repo into a local directory. This includes the JQuery and Jasmine libraries, plus OpenWeather API set up.

Once downloaded open SpecRunner.html, confirm there are ```15 specs, 0 failures```.

User stories
------------    
* As a householder wanting to control temperature
So I can use the heating controls
Thermostat will be visible in a standard PC web browser

* As a householder
So that the house is a predictable temperature
I want the thermostat to start with a default of 20 degrees

* As a householder
So that I can control the temperature
I want to increase, decrease and reset temperature to the default

* As a householder
So that I can monitor and control energy use
I want to be able to switch to a power saving mode

* As a householder
So that power saving mode reliably reduces my bills
I want it to have a default of 20 and max temp of 25 degrees

* As a householder
So that I am aware of my energy usage at a glance
I want the current temperature to be colour coded

* As a householder
So that I can leave the house with frost protection
I want a minimum temperature limit of 10 degrees

* As a householder
So that I can be aware of the weather
I want to see current temperature in my location and that  of any city I enter via a text box
