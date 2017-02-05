/**
 * Created by Fenchelteefee on 05.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample3')
        .controller('defaultCtrl6', defaultCtrl6);

    //defaulCtrl6.$inject = ['dependency'];

    /* @ngInject */
    function defaultCtrl6() {
        var vm = this;
        vm.title = 'defaultCtrl6';
        vm.throwEx = throwEx;

        activate();

        ////////////////

        function activate() {
            //code
        }

        function throwEx(){
            throw new Error('Triggered Exception');
        }
    }

})();

