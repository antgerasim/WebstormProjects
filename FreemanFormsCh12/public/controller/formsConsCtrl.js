/**
 * Created by Fenchelteefee on 10.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('formsConsCtrl', formsConsCtrl);

    /*    formsConsCtrl.$inject = ['dependency'];*/

    /* @ngInject */
    function formsConsCtrl() {
        var vm = this;
        vm.title = 'formsConsCtrl';
        vm.message = "Ready";
        vm.addUser = addUser;
        vm.getError = getError;

        activate();

        ////////////////

        function activate() {
            //code
        }

        function addUser(userDetails) {
            vm.message = userDetails.name + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
        }

        function getError(error) {
            if (angular.isDefined(error)) {//$error object isn't defined until there is a problem, so use angular.isDefined method to block the reading of properties from a nonexistent object.
                if (error.required) {
                    return "Please enter a value";
                } else if (error.email) {
                    return "Please enter a valid email address";
                }
            }
        }
    }

})();


