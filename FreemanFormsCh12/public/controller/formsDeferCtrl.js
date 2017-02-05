/**
 * Created by Fenchelteefee on 10.10.2016.
 */
(function () {
        'use strict';

        angular
            .module('donXample')
            .controller('formsDefer', formsDefer);

        /*    formsDefer.$inject = ['dependency'];*/

        /* @ngInject */
        function formsDefer() {
            var vm = this;
            vm.title = 'formsDefer';
            vm.message = "Ready";
            vm.addUser = addUser;
            vm.getError = getError;

            activate();

            ////////////////

            function activate() {
                //code
            }

            function addUser(userDetails) {
                if (donForm.$valid) {
                    vm.message = userDetails.name + " " + userDetails.email + " " + userDetails.agreed;
                } else {
                    vm.showValidation = true;
                }
            }

            function getError(error) {
                if (angular.isDefined(error)) {
                    if (error.required) {
                        return "Please enter a value";
                    } else if (error.email) {
                        return "Please enter a valid email address";
                    }
                }


            }

        }
    })();

