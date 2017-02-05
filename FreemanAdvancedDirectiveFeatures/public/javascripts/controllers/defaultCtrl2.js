/**
 * Created by Fenchelteefee on 27.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl2', defaultCtrl2);

    defaultCtrl2.$inject = ['$scope'];

    /* @ngInject */
    function defaultCtrl2($scope) {
        //var vm = this;
        $scope.title = 'defaultCtrl2';
        $scope.dataValue = "Not Sure";

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

