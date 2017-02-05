/**
 * Created by Fenchelteefee on 06.12.2016.
 */
(function () {
    'use strict';

    angular
        .module('nfcApp')
        .factory('crudService', crudService);

    crudService.$inject = ['$http'];

    /* @ngInject */
    function crudService($http) {
        var service = {
            getDeliveriesLocal:getDeliveriesLocal,
            getDeliveries: getDeliveries,
            getDelivery:getDelivery,
            putDelivery:putDelivery,
            postDelivery:postDelivery,
            deleteDelivery:deleteDelivery

        };
        return service;

        ////////////////

        //get all
        function getDeliveries() {
           return $http.get('api/Deliveries');
        }
        function getDeliveriesLocal(){
          return  $http.get('/data/deliveries.json')
        }
        //get single by id
        function getDelivery(id) {
          return  $http.get('api/Deliveries/' + id)
        }
/*        function getDeliveryLocal(id) {
            $http.get('api/Deliveries/' + id)
        }*/


        //update by id
        function putDelivery(id, delivery) {
            var putRequest = $http({
                method: 'put',
                url: '/api/Deliveries/' + id,
                data: delivery
            });
            return putRequest;
        }
        //save
        function postDelivery(delivery) {
            var postRequest = $http({
                method:'post',
                url:'api/Deliveries',
                data:delivery
            });
            return postRequest;
        }
        //delete
        function deleteDelivery(id) {
            var deletedRecord=$http({
                method:'delete',
                url:'api/Deliveries/'+id
            });
            return deletedRecord;
        }
    }
})();

