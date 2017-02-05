(function () {
    'use strict';

    angular
        .module('uiApp')
        .controller('form1Ctrl', form1Ctrl);

    form1Ctrl.$inject = ['$scope', '$uibModal', '$log'];

    function form1Ctrl($scope, $uibModal, $log) {
        $scope.title = 'form1Ctrl';
        //$scope.modalPopup = modalPopup;
        $scope.openModalPopup = openModalPopup;
        $scope.yes = yes;
        $scope.no = no;
        activate();


        function activate() {

        }

        //Modal window popup trigger
        function openModalPopup(){
            modalPopup().result
                .then(function (data) {
                    $scope.handleSuccess(data)
                })//todo check if this is right error callback
                .then(null, function (reason) {
                    $scope.handleDismiss(reason);
                });
        }

        //Instantiate the modal window
        function modalPopup() {
            return $scope.modalInstance = $uibModal.open({
                templateUrl: 'donModal1.html',
                scope: $scope
            });
        }

        //Close the modal if Yes button click
        function yes(){
            $scope.modalInstance.close('Yes Button Clicked')
        }

        //Dismiss the modal if No button click
        function no(){
            $scope.modalInstance.dismiss('No Button Clicked')
        }

        //log Success message
        function handleSuccess(data) {
            $log.info('Modal closed: ' + data);
        }

        //Log Dismiss message
        function handleDismiss(reason) {
            $log.info('Modal dismissed: ' + reason);
        }
    }
})();