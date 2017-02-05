/**
 * Created by Fenchelteefee on 03.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donExampleApp.ServiceValues',[])
        .service('daysServiceValues', daysServiceValues);//name of the service

    function daysServiceValues(nowValue) {//named factory function creates service object. NowValue comes from modules object
        this.today = nowValue.getDay();
        this.tomorrow = this.today + 1; //this keyword
    }
})();

/*The service method takes two arguments: the name of the service and a factory function that is called to create
 the service object. When AngularJS calls the factory function, it assigns a new object that is accessible via the this
 keyword, and I use this object to define today and tomorrow properties. This is a simple service, but it means I can
 access the today and tomorrow values via my service anywhere in my AngularJS code—something that helps simplify
 the development process when creating more complex applications.

 */
