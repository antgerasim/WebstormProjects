/**
 * Created by Fenchelteefee on 19.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('changeValuesCtrl', changeValuesCtrl);

    /*    changeValuesCtrl.$inject = ['dependency'];*/

    /* @ngInject */
    function changeValuesCtrl() {
        var vm = this;
        vm.title = 'changeValuesCtrl';
        vm.products = [];
        vm.incrementPrices = incrementPrices;

        activate();

        ////////////////

        function activate() {
            vm.products = [
                {name: "Apples", category: "Fruit", price: 1.20, expiry: 10},
                {name: "Bananas", category: "Fruit", price: 2.42, expiry: 7},
                {name: "Pears", category: "Fruit", price: 2.02, expiry: 6}
            ];
        }

        function incrementPrices() {
            for (var i = 0; i < vm.products.length; i++) {
                vm.products[i].price++;
            }
        }
    }

})();

