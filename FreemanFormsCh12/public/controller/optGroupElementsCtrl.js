/**
 * Created by Fenchelteefee on 11.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('optGroupElementsCtrl', optGroupElementsCtrl);

    //optGroupElementsCtrl.$inject = ['dependency'];

    /* @ngInject */
    function optGroupElementsCtrl() {
        var vm = this;
        vm.title = 'optGroupElementsCtrl';
        vm.todos = [];

        activate();

        ////////////////

        function activate() {
            vm.todos = [
                {id: 100, place: "Store", action: "Get groceries", complete: false},
                {id: 200, place: "Home", action: "Call plumber", complete: false},
                {id: 300, place: "Store", action: "Buy running shoes", complete: true}
            ];
        }
    }

})();

