/**
 * Created by Fenchelteefee on 23.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('thirdCtrl', thirdCtrl);

/*    thirdCtrl.$inject = ['$scope'];*/

    /* @ngInject */
    function thirdCtrl() {
        var vm = this;
        vm.title = 'thirdCtrl';
        vm.data = {name:'Adam'};
        vm.city = 'London';

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

