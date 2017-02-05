/**
 * Created by Fenchelteefee on 26.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('productCtrl', productCtrl);

    productCtrl.$inject = ['$scope'];

    /* @ngInject */
    function productCtrl($scope) {
        //var vm = this;
        $scope.title = 'productCtrl';
        $scope.products = [{name: "Apples", price: 1.20, quantity: 2},
            {name: "Bananas", price: 2.42, quantity: 3},
            {name: "Pears", price: 2.02, quantity: 1}];

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

