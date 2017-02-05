/**
 * Created by Fenchelteefee on 14.12.2016.
 */
(function () {
    'use strict';

    angular
        .module('nfcApp')
        .controller('addNewSupplierCtrl', addNewSupplierCtrl);

    addNewSupplierCtrl.$inject = ['$uibModalInstance','items'];

    /* @ngInject */
    function addNewSupplierCtrl($uibModalInstance,items) {
        var $instc = this;
        $instc.title = items;
        $instc.newSupplier = {};
        $instc.submitForm = submitForm;
        $instc.cancel = cancel;

        activate();

        ////////////////

        function activate() {

        }

        function submitForm() {
            $uibModalInstance.close($instc.newSupplier );
        }

        function cancel() {
            $uibModalInstance.dismiss('dismissed');
        }
    }

})();

