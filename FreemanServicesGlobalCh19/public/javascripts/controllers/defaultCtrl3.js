/**
 * Created by Fenchelteefee on 03.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl3', defaultCtrl3);

    defaultCtrl3.$inject = ['$interval'];

    /* @ngInject */
    function defaultCtrl3($interval) {
        var vm = this;
        vm.title = 'defaultCtrl3';

        $interval(function () {
            vm.time = new Date().toTimeString();
        }, 2000);

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

