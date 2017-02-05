/**
 * Created by Fenchelteefee on 06.12.2016.
 */

(function () {
    'use strict';

    angular
        .module('nfcApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$uibModal', '$log', 'crudService'];

    /* @ngInject */
    function mainCtrl($uibModal, log, crudService) {
        var vm = this;
        vm.title = 'mainCtrl';
        vm.data = {};
        vm.details = {};
        vm.details.isShown = false;
        vm.isShown = true;
        vm.isShownNoResultInfo = false;
        vm.searchNoResultText = 'Sorry, nothing found';
        vm.showSupplierDetails = true;

        vm.getSupplierDetails = getSupplierDetails;
        vm.addNewSupplier = addNewSupplier;
        vm.saveSupp = saveSupp;

        activate();

        ////////////////

        function activate() {
            loadDeliveries();
            loadSuppliers();
        }

        //addNewSupplier.html modal
        function addNewSupplier() {
            var modalInstance = $uibModal.open({
                templateUrl: 'addNewSupplier.html',
                controller: 'addNewSupplierCtrl',
                controllerAs: '$instc',
                resolve: {
                    items: function () {
                        return vm.title;
                    }
                }
            });

            modalInstance.result
                .then(function (suppl) {
                    saveSupp(suppl);
                })
                .catch(function (error) {
                    $log.info("Modal " + error + " at: " + new Date());
                })
        }

        function saveSupp(supp) {
            var save = crudServiceSupp.postSupplier(supp);
            var id = 0;
            save.then(function (resp) {
                debugger;
                id = resp.data.id;
                loadSuppliers();
                alert("Новая поставка успешно сохранена");

            }, function (error) {
                vm.data.error = error;
            });
        }

        function loadDeliveries() {

            /*            var result = crudService.getDeliveries();
             result.then(function (response) {
             vm.data.deliveries = response;
             }, function (error) {
             vm.data.error = error;
             });*/

            var result = crudService.getDeliveriesLocal();
            result.then(function (response) {
                vm.data.deliveries = response.data;
            }, function (error) {
                vm.data.error = error;
            });
        }

        function loadSuppliers() {
            vm.data.suppliers = [
                {id: '1', Inn: '123456789012', CompanyName: 'ИП Альфа'},
                {id: '2', Inn: '12345678', CompanyName: 'АО Бета'}
            ];
        }

        function getSupplierDetails(id) {
            debugger;
            vm.details.supplierInn = getSupplierInn(id, vm.data.deliveries);
            //1.getTotalDeliveryCount
            vm.details.totalDeliveryCount = getTotalDeliveryCount(id, vm.data.deliveries);
            //2.getTotalDeliverySum
            vm.details.totalDeliverySum = getTotalDeliverySum(id, vm.data.deliveries);
            //3.getDeliveryCurrency
            vm.details.deliveryCurrency = getDeliveryCurrency(id, vm.data.deliveries);
            vm.details.isShown = true;

        }

        function getSupplierInn(id, data) {
            var inn = '';
            for (var i = 0; i < data.length; i++) {
                var del = data[i];
                if (del.supplierId == id) {
                    inn = del.supplierInn;
                }
            }
            return inn;
        }

        function getDeliveryCurrency(id, data) {
            debugger;
            var deliveryCurrency = [];

            for (var i = 0; i < data.length; i++) {
                var del = data[i];
                if (del.supplierId == id) {
                    //exclude duplicates
                    if (deliveryCurrency.indexOf(del.currency) == -1) {
                        deliveryCurrency.push(del.currency);
                    }
                }
            }
            return deliveryCurrency;
        }

        function getTotalDeliverySum(id, data) {
            var totalDeliverySum = 0;

            for (var i = 0; i < data.length; i++) {
                var del = data[i];
                if (del.supplierId == id) {
                    totalDeliverySum += del.sum;
                }
            }

            return totalDeliverySum;
        }

        function getTotalDeliveryCount(id, data) {
            var totalDeliveryCount = 0;

            for (var i = 0; i < data.length; i++) {
                var del = data[i];
                if (del.supplierId == id) {
                    totalDeliveryCount++;
                }
            }
            return totalDeliveryCount;
        }
    }
})();


