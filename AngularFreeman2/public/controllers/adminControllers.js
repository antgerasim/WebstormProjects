angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:5500/users/login")
    .constant("ordersUrl", "http://localhost:5500/orders")
    .controller("authCtrl", authCtrl)
    .controller("mainCtrl", mainCtrl)
    .controller("ordersCtrl", ordersCtrl);


function authCtrl($http, $location, authUrl) {
    var vm = this;
    vm.authenticate = authenticate;

    function authenticate(user, pass) {
        $http.post(authUrl, {
            username: user,
            password: pass
        }, {
            withCredentials: true//cookie support of responses from deployd server
        }).success(function (data) {
            $location.path("/main");
        }).error(function (error) {
            vm.authenticationError = error;
        })
    }
}

function mainCtrl() {
    var vm = this;
    vm.screens = ["Products", "Orders"];
    vm.current = vm.screens[0];
    vm.setScreen = setScreen;
    vm.getScreen = getScreen;

    function setScreen(index) {
        vm.current = vm.screens[index];
    }

    function getScreen() {
        return vm.current == "Products" ? "/views/adminProducts.html" : "/views/adminOrders.html";
    }
}

function ordersCtrl($http, ordersUrl) {
    var vm = this;
    vm.selectedOrder;
    vm.selectOrder = selectOrder;
    vm.calcTotal = calcTotal;

    activate();

    function activate() {
        $http.get(ordersUrl, {withCredentials: true})
            .success(function (data) {
                vm.orders = data;
            })
            .error(function (error) {
                vm.error = error;
            });
    }

    function selectOrder(order) {
        vm.selectedOrder = order;
    }

    function calcTotal(order){
        var total =0;
        for (var i = 0; i < order.products.length; i++) {
            total+=order.products[i].count * order.products[i].price;
        }
        return total;
    }

}
