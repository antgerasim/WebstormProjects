/**
 * Created by Fenchelteefee on 07.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXampleApp')
        .controller('directiveCtrl', directiveCtrl);

    //directiveCtrl.$inject = ['dependency'];

    /* @ngInject */
    function directiveCtrl() {
        var vm = this;
        vm.title = 'directiveCtrl';
        vm.dataValue = false;

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

