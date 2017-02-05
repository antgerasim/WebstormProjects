/**
 * Created by Fenchelteefee on 07.10.2016.
 */(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('mainCtrl', mainCtrl);

    //mainCtrl.$inject = ['dependency'];

    /* @ngInject */
    function mainCtrl() {
        var vm = this;
        vm.title = 'mainCtrl';
        vm.todos = [];

        vm.addNewItem = addNewItem;

        activate();

        ////////////////

        function activate() {
            vm.todos = [
                {action: "Get groceries", complete: false},
                {action: "Call plumber", complete: false},
                {action: "Buy running shoes", complete: true},
                {action: "Buy flowers", complete: false},
                {action: "Call family", complete: false}];

        }

        function addNewItem(newItem) {

            //check for the existence of the data object
            if (angular.isDefined(newItem) && angular.isDefined(newItem.action) && angular.isDefined(newItem.location)) {
                vm.todos.push({
                    action: newItem.action + "(" + newItem.location + ")",
                    complete: false
                });
            }else {
                console.log("ERROR: newItem is corrupted")
            }

        }
    }

})();

