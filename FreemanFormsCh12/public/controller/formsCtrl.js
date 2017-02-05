/**
 * Created by Fenchelteefee on 08.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('formsCrl', formsCrl);

    //formsCrl.$inject = ['dependency'];

    /* @ngInject */
    function formsCrl() {
        var vm = this;
        vm.title = 'formsCrl';
        vm.addUser = addUser;
        vm.message = "Ready";

        activate();

        ////////////////

        function activate() {
            //code
        }

        function addUser(userDetails) {
            vm.message = userDetails.name
                + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
        }
    }

})();

