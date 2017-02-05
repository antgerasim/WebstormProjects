/**
 * Created by Fenchelteefee on 24.09.2016.
 */
angular.module("cart", [])
    .factory("cart", cart)
    .directive("cartSummary", cartSummery);

function cartSummery(cart) {
    return {
        restrict: "E",
        templateUrl: "components/cart/cartSummary.html",
        controller: directiveController,
        controllerAs: 'vm',
/*        scope: {
            text: '@'
        },*/
        bindToController: true//because the scope is isolated
    };

    //directiveController.$inject = ['$scope'];//

    function directiveController() {

        var vm = this;
        vm.min = 3;

        var cartData = cart.getProducts();
        vm.total = function () {
            var total = 0;
            for (var i = 0; i < cartData.length; i++) {
                total += (cartData[i].price * cartData[i].count);
            }
            return total;
        }
        vm.itemCount = function () {
            var total = 0;
            for (var i = 0; i < cartData.length; i++) {
                total += cartData[i].count;
            }
            return total;
        }
    }
}

function cart() {

    var cartData = [];

    return {

        addProduct: function (id, name, price) {
            var addedToExistingItem = false;
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    cartData[i].count++;
                    addedToExistingItem = true;
                    break;
                }
            }
            if (!addedToExistingItem) {
                cartData.push({
                    count: 1, id: id, price: price, name: name
                });
            }
        },

        removeProduct: function (id) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    cartData.splice(i, 1);
                    break;
                }
            }
        },

        getProducts: function () {
            return cartData;
        }
    }
}

//weiter mit s157 163