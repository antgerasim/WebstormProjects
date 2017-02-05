/**
 * Created by Fenchelteefee on 26.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('compileFnCtrl', compileFnCtrl);

        compileFnCtrl.$inject = ['$scope'];

    /* @ngInject */
    function compileFnCtrl($scope) {
        //var vm = this;
        $scope.title = 'compileFnCtrl';
        $scope.products = [{name: "Apples", price: 1.20},
            {name: "Bananas", price: 2.42}, {name: "Pears", price: 2.02}];

        $scope.changeData = changeData;

        activate();

        ////////////////

        function activate() {
            //code
        }

        function changeData() {
            $scope.products.push({name: "Cherries", price: 4.02});
            for (var i = 0; i < $scope.products.length; i++) {
                $scope.products[i].price++;
            }
        }
    }

})();

