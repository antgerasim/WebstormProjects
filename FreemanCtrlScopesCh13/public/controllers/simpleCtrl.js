/**
 * Created by Fenchelteefee on 11.10.2016.
 */

angular.module('donXample')
    .controller('simpleCtrl', function ($scope) {
        $scope.city = "London";//data defined
        $scope.getCountry = function (city) {//behavior defined
            switch (city) {
                case "London":
                    return "UK";
                case "New York":
                    return "USA";
            }
        }
    });


/*(function () {
 'use strict';

 angular
 .module('donXample')
 .controller('simpleCtrl', simpleCtrl);

 simpleCtrl.$inject = ['dependency'];

 /!* @ngInject *!/
 function simpleCtrl(dependency) {
 var vm = this;
 vm.title = 'simpleCtrl';

 activate();

 ////////////////

 function activate() {
 code
 }
 }

 })();*/