/**
 * Created by Fenchelteefee on 03.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donExampleApp.Services',[])
        .service('daysService', daysService)
        .config(function () {
            console.log("Services module config: (no time)");
        })
        .run(function (startTime) {//constant 'startTime' declared in main module
            console.log('Services module run: ' + startTime)
        })
    ;//name of the service

    function daysService() {//named factory function creates service object
        this.today = new Date().getDay();
        this.tomorrow = this.today + 1; //this keyword
    }
})();




