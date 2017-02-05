/**
 * Created by Fenchelteefee on 06.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXampleApp')
        .controller('defaultCtrl', defaultCtrl);

    //defaultCtrl.$inject = [];

    /* @ngInject */
    function defaultCtrl() {
        var vm = this;
        vm.title = 'defaultCtrl';
        vm.todos = [
            {action: "Get groceries", complete: false},
            {action: "Call plumber", complete: false},
            {action: "Buy running shoes", complete: true},
            {action: "Buy flowers", complete: false},
            {action: "Call family", complete: false}
        ];
        vm.buttonNames = ["Red", "Green", "Blue"];
        vm.settings = {
            Rows: "Red",
            Columns: "Green"
        };

        vm.data = {
            rowColor: "Blue",
            columnColor: "Green"
        };

        vm.handleEvent = handleEvent;

        function handleEvent(e) {
            console.log("Event type: " + e.type);
            vm.data.columnColor = e.type == "mouseover" ? "Green" : "Blue";
        }

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

