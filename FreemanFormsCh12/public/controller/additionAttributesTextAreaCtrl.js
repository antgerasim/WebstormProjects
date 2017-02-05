/**
 * Created by Fenchelteefee on 10.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('additionAttributesTextArea', additionAttributesTextArea);

    //additionAttributesTextArea.$inject = ['dependency'];

    /* @ngInject */
    function additionAttributesTextArea() {
        var vm = this;
        vm.title = 'additionAttributesTextArea';
        vm.requireValue = true;
        vm.matchPattern = new RegExp("^[a-z]");

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

