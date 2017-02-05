/**
 * Created by Fenchelteefee on 21.09.2016.
 */
angular.module("sportsStore")//call to angular.module method without []
    .constant('dataUrl', 'http://localhost:5500/products')
    .constant('orderUrl', 'http://localhost:5500/orders')
    .controller('sportsStoreCtrl', sportsStoreCtrl);

function sportsStoreCtrl($http, $location, dataUrl, orderUrl, cart) {
    var vm = this;
    vm.data = {};
    vm.sendOrder = sendOrder;

    activate();

    function activate() {
        $http.get(dataUrl)//todo to activate function here?
            .success(function (response) {
                vm.data.products = response;
            })
            .error(function (error) {
                vm.data.error = error;
            });
    }

    function sendOrder(shippingDetails) {
        var order = angular.copy(shippingDetails);
        order.products = cart.getProducts();
        $http.post(orderUrl, order)
            .success(function (data) {
                vm.data.orderId = data.id;
                cart.getProducts().length = 0;
            })
            .error(function (error) {
                vm.data.orderError = error;
            }).finally(function () {
            $location.path("/complete")
        });
    }
}


/*
 vm.data = {
 products: [
 {
 name: "Product #1", description: "A product",
 category: "Category #1", price: 100
 },
 {
 name: "Product #2", description: "A product",
 category: "Category #1", price: 110
 },
 {
 name: "Product #3", description: "A product",
 category: "Category #2", price: 210
 },
 {
 name: "Product #4", description: "A product",
 category: "Category #3", price: 202
 }]
 }*/
//weiter mit 149