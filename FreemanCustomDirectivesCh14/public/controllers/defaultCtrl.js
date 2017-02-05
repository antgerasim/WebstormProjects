/**
 * Created by Fenchelteefee on 18.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl', defaultCtrl);

    //defaultCtrl.$inject = ['dependency'];

    /* @ngInject */
    function defaultCtrl() {
        var vm = this;
        vm.title = 'defaultCtrl';
        vm.products = [];

        activate();

        ////////////////

        function activate() {
            vm.products = [
                {name: "Apples", category: "Fruit", price: 1.20, expiry: 10},
                {name: "Bananas", category: "Fruit", price: 2.42, expiry: 7},
                {name: "Pears", category: "Fruit", price: 2.02, expiry: 6}
            ];
        }
    }

})();

