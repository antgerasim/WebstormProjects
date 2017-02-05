/**
 * Created by Fenchelteefee on 30.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl', defaultCtrl);

    defaultCtrl.$inject = ['$scope'];

    /* @ngInject */
    function defaultCtrl($scope) {
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
            console.log("Total click count: " + newVal);
        })
    }

})();

