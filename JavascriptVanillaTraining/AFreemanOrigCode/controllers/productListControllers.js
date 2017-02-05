/// <reference path="../angular.js" />

angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", productListCtrl);

function productListCtrl($filter, productListActiveClass, productListPageCount) {

    var vm = this;
    var selectedCategory = null;

    vm.selectedPage = 1;
    vm.pageSize = productListPageCount;

    vm.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        vm.selectedPage = 1;
    }

    vm.selectPage = function (newPage) {
        vm.selectedPage = newPage;
    }

    vm.categoryFilterFn = function (product) {
        return selectedCategory == null ||
            product.category == selectedCategory;
    }

    vm.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : "";
    }

    vm.getPageClass = function (page) {
        return vm.selectedPage == page ? productListActiveClass : "";
    }
}


