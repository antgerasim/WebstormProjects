angular.module("sportsStoreAdmin")
    .constant("productUrl", "http://localhost:5500/products/")
    .config(config)
    .controller("productCtrl", productCtrl);

config.$inject = ['$httpProvider'];

/* @ngInject */
function config($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    /*        $httpProvider.defaults.headers.post = {};*/
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.withCredentials = true;
}

function productCtrl($resource, productUrl) {
    var vm = this;

//    vm.listProducts = listProducts;
    vm.productsResource = {};

    vm.deleteProduct = deleteProduct;
    vm.createProduct = createProduct;
    vm.updateProduct = updateProduct;
    vm.startEdit = startEdit;
    vm.cancelEdit = cancelEdit;
    vm.listProducts = listProducts;


    activate();

    function activate() {
        //create access object p201
        vm.productsResource = $resource(productUrl + ":id", {id: "@id"});
        vm.listProducts();
    }

    function listProducts() {
        vm.products = vm.productsResource.query();
    }

    function deleteProduct(product) {
        product.$delete().then(function () {
            vm.products.splice(vm.products.indexOf(product), 1);
        });
    }

    function createProduct(product) {
        new vm.productsResource(product).$save().then(function (newProduct) {
            vm.products.push(newProduct);
            vm.editedProduct = null;
        });
    }

    function updateProduct(product) {
        product.$save();
        vm.editedProduct = null;
    }

    function startEdit(product) {
        vm.editedProduct = product;
    }

    function cancelEdit() {
        vm.editedProduct = null;
    }


}

//weiter mit s201