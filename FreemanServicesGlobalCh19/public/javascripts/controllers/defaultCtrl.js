/**
 * Created by Fenchelteefee on 02.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl', defaultCtrl);

    defaultCtrl.$inject = ['$window'];

    /* @ngInject */
    function defaultCtrl($window) {
        var vm = this;
        vm.title = 'defaultCtrl';
        vm.displayAlert = displayAlert

        activate();

        ////////////////

        function activate() {
            //code
        }

        function displayAlert(msg) {
            $window.alert(msg)
        }

    }

})();

