/**
 * Created by Fenchelteefee on 11.12.2016.
 */
(function () {
    'use strict';

    angular
        .module('uiApp')
        .controller('modalDemoInstanceCtrl', modalDemoInstanceCtrl);

    modalDemoInstanceCtrl.$inject = ['$uibModalInstance','items'];

    /* @ngInject */
    function modalDemoInstanceCtrl($uibModalInstance,items) {
        var $instc = this;
        $instc.title = 'modalDemoInstanceCtrl';
        $instc.items = items;


        $instc.selected = {
            item: $instc.items[0]
        };
        $instc.ok = ok;
        $instc.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            //code
        }

        function ok() {
            debugger;
            //$uibModalInstance.close(true);
            $uibModalInstance.close( $instc.selected);
        }

        function cancel() {
            debugger;
            $uibModalInstance.dismiss('dismissed');
        }
    }

})();

