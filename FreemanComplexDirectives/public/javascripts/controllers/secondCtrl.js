/**
 * Created by Fenchelteefee on 23.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('secondCtrl', secondCtrl);

    //secondCtrl.$inject = ['dependency'];

    /* @ngInject */
    function secondCtrl() {
        var vm = this;
        vm.title = 'secondCtrl';
        vm.data = {name: 'Adam'};

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

