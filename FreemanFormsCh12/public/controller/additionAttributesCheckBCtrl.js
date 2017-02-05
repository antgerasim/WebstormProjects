/**
 * Created by Fenchelteefee on 10.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('additionAttributesCheckBCtrl', additionAttributesCheckBCtrl);

    //additionAttributesCheckBCtrl.$inject = ['dependency'];

    /* @ngInject */
    function additionAttributesCheckBCtrl() {
        var vm = this;
        vm.title = 'additionAttributesCheckBCtrl';

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

