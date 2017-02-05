/**
 * Created by Fenchelteefee on 11.12.2016.
 */

(function () {
    'use strict';

    angular
        .module('uiApp')
        .controller('form2Ctrl', form2Ctrl);

    form2Ctrl.$inject = ['$uibModal', '$log'];

    /* @ngInject */
    function form2Ctrl($uibModal, $log) {
        var vm = this;
        vm.title = 'formCtrl';
        vm.userData = {};
        console.log('formCtrl', $uibModal);
        vm.showTerms = showTerms;

        activate();

        ////////////////

        function activate() {
            //code
        }

        function showTerms() {
            var modalInstance = $uibModal.open({
                //to set this true, you will need to add ngAnimate module
                animation: true,
                controller:'modal2InstanceCtrl',
                templateUrl: 'termsModal.html',
                size: 'md'
            });

            modalInstance.result.then(function (status) {
                    vm.userData.agree = status;
                },
                $log.info('Modal dismissed at: ' + new Date())
            );

        }


    }

})();


