/**
 * Created by Fenchelteefee on 04.12.2016.
 */
(function () {
    'use strict';

    angular
        .module('UIGrid_App')
        .factory('crudService2', crudService2);

    crudService2.$inject = ['$http'];

    /* @ngInject */
    function crudService2($http) {
        var service = {
            getProducts: getProducts,
            getProductsLocal: getProductsLocal
        };
        return service;

        ////////////////

        function getProducts(apiRoute) {
            return $http.get(apiRoute);
        }

        function getProductsLocal(apiRoute) {

            return $http.get(apiRoute);
        }

        function getDataLocal(){
            $http.get('/data/500_complex.json')
                .success(function (data) {
                    data.forEach(function (row) {
                        row.registered = Date.parse(row.registered);
                    });
                    vm.gridOptions.data = data;
                });
        }
    }

})();


