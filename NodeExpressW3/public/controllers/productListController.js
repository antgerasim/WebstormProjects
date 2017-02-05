/**
 * Created by Fenchelteefee on 29.09.2016.
 */
angular.module("donStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", productListCtrl);

function productListCtrl($filter, productListActiveClass, productListPageCount, cart) {
    var vm = this;
    var selectedCategory = null;

    vm.selectedPage = 1;
    vm.pageSize = productListPageCount;

    vm.selectCategory = selectCategory;
    vm.categoryFilterFn = categoryFilterFn;
    vm.getCategoryClass = getCategoryClass;
    vm.selectPage = selectPage;
    vm.getPageClass = getPageClass;
    vm.addProductToCart = addProductToCart;

    function addProductToCart(product){
        cart.addProduct(product.id, product.name, product.price);
    }

    function getPageClass(page) {
        return vm.selectedPage == page ? productListActiveClass : "";
    }

    function selectPage(newPage) {
        vm.selectedPage = newPage;
    }

    function selectCategory(newCategory) {
        selectedCategory = newCategory;
    }

    function categoryFilterFn(product) {
        var result = selectedCategory == null ||
            product.category == selectedCategory;
        return result;
    }

    function getCategoryClass(category) {
        return selectedCategory == category ? productListActiveClass : "";
    }

}