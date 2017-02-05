/**
 * Created by Fenchelteefee on 20.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('jqliteListElemensCtrl', jqliteListElemensCtrl);

    //jqliteListElemensCtrl.$inject = ['dependency'];

    /* @ngInject */
    function jqliteListElemensCtrl() {
        var vm = this;
        vm.title = 'jqliteListElemensCtrl';
        vm.names = [];
        activate();

        ////////////////

        function activate() {
            vm.names = ["Apples", "Bananas", "Oranges"];
        }
    }

})();

