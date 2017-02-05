/**
 * Created by Fenchelteefee on 10.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('selectElementAttributesCtrl', selectElementAttributesCtrl);

    //selectElementAttributesCtrl.$inject = ['dependency'];

    /* @ngInject */
    function selectElementAttributesCtrl() {
        var vm = this;
        vm.title = 'selectElementAttributesCtrl';
        vm.todos = [];

        activate();

        ////////////////

        function activate() {
            vm.todos = [
                {id:100, action: "Get groceries", complete: false},
                {id:200, action: "Call plumber", complete: false},
                {id:300, action: "Buy running shoes", complete: true}
            ];
        }
    }

})();

