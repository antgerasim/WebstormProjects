/**
 * Created by Fenchelteefee on 19.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('jqliteCtrl', jqliteCtrl);

    //jqliteCtrl.$inject = ['dependency'];

    /* @ngInject */
    function jqliteCtrl() {
        var vm = this;
        vm.title = 'jqliteCtrl';

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

