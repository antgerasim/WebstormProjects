/**
 * Created by Fenchelteefee on 24.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('evalCtrl', evalCtrl);

    //ControllerName.$inject = ['dependency'];

    /* @ngInject */
    function evalCtrl() {
        var vm = this;
        vm.title = 'ControllerName';
        vm.data = {};
        vm.getCity = getCity;

        activate();

        ////////////////

        function activate() {
            vm.data = {
                name: "Adam",
                defaultCity: "London"
            }
        }

        function getCity(name) {
            return name == 'Adam' ? vm.data.defaultCity : "Unknown";
        }
    }

})();

//weiter mit 442 Evaluating Expressions