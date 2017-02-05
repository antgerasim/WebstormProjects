/**
 * Created by Fenchelteefee on 19.06.2016.
 */

(function () {
    "use strict"
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ["productResource",
            ProductListCtrl]);

    function ProductListCtrl() {
        var vm = this;

        productResource.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }
}());



