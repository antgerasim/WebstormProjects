/**
 * Created by Fenchelteefee on 04.10.2016.
 */
/*
 angular.module('donXampleApp')
 .controller*/

(function () {
    'use strict';

    angular
        .module('donXampleApp')
        .controller('defaultCtrl', defaultCtrl);

    //defaultCtrl.$inject = ['dependency'];

    /* @ngInject */
    function defaultCtrl() {
        var vm = this;
        vm.title = 'defaultCtrl';
        vm.todos;
        vm.showList = false;
        vm.data = {};
        vm.viewFile = viewFile;
        vm.reportChange = reportChange;

        activate();

        ////////////////

        function activate() {
            vm.todos = [
                {action: 'Get groceries', complete: false},
                {action: 'Call plumber', complete:false},
                {action: 'Call plumber', complete:true},
                {action: 'Buy flowers', complete:false},
                {action: 'Call family', complete:false},
            ]
        }

        function viewFile(){
            return vm.showList ? 'views/list.html': "views/table.html"
        }

        function reportChange(){
            console.log('Displayed content: ' + vm.viewFile())
        }
    }

})();


