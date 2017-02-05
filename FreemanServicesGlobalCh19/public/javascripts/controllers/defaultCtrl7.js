/**
 * Created by Fenchelteefee on 05.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl7', defaultCtrl7);

    defaultCtrl7.$inject = ['$exceptionHandler'];

    /* @ngInject */
    function defaultCtrl7($exceptionHandler) {
        var vm = this;
        vm.title = 'ControllerName';
        vm.throwEx = throwEx;

        activate();

        ////////////////

        function activate() {
            //code
        }

        function throwEx() {
            try {
                throw new Error("Triggered Exception");
            }
            catch (ex) {
                //takes two arguments: the exception and an optional string describing the exceptions cause
                $exceptionHandler(ex.message, "Button Click");
            }
        }
    }

})();

