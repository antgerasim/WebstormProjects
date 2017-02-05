/**
 * Created by Fenchelteefee on 03.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donExampleApp.Filters',[])
        .filter('dayName', dayName);

    function dayName() {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];
        return dayNameFilter;

        ////////////////

        function dayNameFilter(input) {
            var result = angular.isNumber(input) ? dayNames[input] : input;
            return result;
            //return input;
        }
    }

})();

/*
Filters are applied after JavaScript expressions are evaluated, which allows me to use the || operator to check
for null values and then the | operator to apply the filter.*/
