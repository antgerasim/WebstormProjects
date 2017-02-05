/**
 * Created by Fenchelteefee on 26.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl', defaultCtrl);

    //defaultCtrl.$inject = ['dependency'];

    /* @ngInject */
    function defaultCtrl($scope) {
       // var vm = this;
        $scope.title = 'defaultCtrl';
        $scope.dataSource = 'controller';

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

