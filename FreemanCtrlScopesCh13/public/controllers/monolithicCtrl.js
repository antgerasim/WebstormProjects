/**
 * Created by Fenchelteefee on 12.10.2016.
 */
angular.module('donXample')
    .controller('monolithicCtrl', function ($scope) {
        $scope.addresses = {};

        $scope.setAddress = function (type, zip) {
            console.log("Type: " + type + " " + zip);
            $scope.addresses[type] = zip;
        };

        $scope.copyAddress = function () {
            $scope.shippingZip = $scope.billingZip;
        };
    });

/*
 weiter mit 328*/
