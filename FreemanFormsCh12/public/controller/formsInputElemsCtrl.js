/**
 * Created by Fenchelteefee on 10.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('formsInputElemsCtrl', formsInputElemsCtrl);

    //formsInputElemsCtrl.$inject = ['dependency'];

    /* @ngInject */
    function formsInputElemsCtrl() {
        var vm = this;
        vm.title = 'formsInputElemsCtrl';
        vm.requireValue = true;
        vm.matchPattern = new RegExp("^[a-z]");

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

