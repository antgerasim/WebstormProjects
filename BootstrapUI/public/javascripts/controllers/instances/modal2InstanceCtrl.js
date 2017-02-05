/**
 * Created by Fenchelteefee on 11.12.2016.
 */
(function () {
    'use strict';

    angular
        .module('uiApp')
        .controller('modal2InstanceCtrl', modal2InstanceCtrl);

    modal2InstanceCtrl.$inject = ['$scope','$uibModalInstance'];

    /* @ngInject */
    function modal2InstanceCtrl($scope, $uibModalInstance) {
        $scope.title = 'modal2InstanceCtrl';
        $scope.agree = agree;
        $scope.disagree = disagree;


        activate();

        ////////////////

        function activate() {
            //code
        }

        function agree() {
            //send the status as true
            $uibModalInstance.close(true);
        }

        function disagree() {
            //send the status as false
            $uibModalInstance.dismiss(false);
        }
    }

})();

