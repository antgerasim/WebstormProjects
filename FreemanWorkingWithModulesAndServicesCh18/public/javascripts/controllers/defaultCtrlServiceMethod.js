/**
 * Created by Fenchelteefee on 30.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrlServiceMethod', defaultCtrlServiceMethod);

    defaultCtrlServiceMethod.$inject = ['$scope','logService'];

    /* @ngInject */
    function defaultCtrlServiceMethod($scope,logService) {
        var vm = this;
        vm.title = 'defaultCtrl';
        vm.data = {};

        activate();

        ////////////////

        function activate() {
            vm.data = {
                cities: ["London", "New York", "Paris"],
                totalClicks: 0
            }
        }

        $scope.$watch('c.data.totalClicks', function (newVal) {
            //console.log("Total click count: " + newVal);
            logService.log("Total click count: " + newVal);
            //logService.log("hi, I'm a message");

        })
    }

})();

