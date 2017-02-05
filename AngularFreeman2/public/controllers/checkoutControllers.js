/**
 * Created by Fenchelteefee on 25.09.2016.
 */
angular.module("sportsStore")
    .controller("cartSummeryController", cartSummeryController);

function cartSummeryController(cart) {
    var vm = this;
    vm.cartData = cart.getProducts();// todo activate here?
    vm.total = total;
    vm.remove = remove;

    function total() {
        var total = 0;
        for (var i = 0; i < vm.cartData.length; i++) {
            total += (vm.cartData[i].price * vm.cartData[i].count);
        }
        return total;
    }

    function remove(id){
        cart.removeProduct(id);
    }

}