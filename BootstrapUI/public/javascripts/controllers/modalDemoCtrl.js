/**
 * Created by Fenchelteefee on 11.12.2016.
 */
(function () {
    'use strict';

    angular
        .module('uiApp')
        .controller('modalDemoCtrl', modalDemoCtrl);

    modalDemoCtrl.$inject = ['$uibModal', '$log'];

    /* @ngInject */
    function modalDemoCtrl($uibModal, $log) {
        var vm = this;

        vm.title = 'modalDemoCtrl';
        vm.items = ['item1', 'item2', 'item3'];
        vm.animationsEnabled = true;
        vm.selected = {item:'empty'};
        vm.open = open;
        vm.toggleAnimation = toggleAnimation;

        activate();

        ////////////////

        function activate() {
            // code
        }

        function open(size) {

            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'donModalContent.html',
                controller: 'modalDemoInstanceCtrl',
                controllerAs: '$instc',//name of ctrlAs for donModalContent.html
                size: size,
                resolve: {//injects this item array into modelDemoInstance scope!
                    items: function () {
                        return vm.items;
                    }
                }
            });

            modalInstance.result
                .then(function (selectedObj) {
                    vm.selected = selectedObj;
                })
                .catch(function (response) {
                    $log.info('Modal ' + response + ' at: ' + new Date());
                });
        }

        function toggleAnimation() {
            vm.animationsEnabled = !vm.animationsEnabled;
        }
    }

})();

