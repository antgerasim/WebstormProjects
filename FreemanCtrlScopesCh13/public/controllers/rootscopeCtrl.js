/**
 * Created by Fenchelteefee on 12.10.2016.
 */
angular.module('donXample')
.controller('rootScopeCtrl', function ($scope, $rootScope) {

    $scope.$on("zipCodeUpdated", function (event, args) {//event handler
        $scope[args.type] = args.zipCode;
    });

    $scope.setAddress = function (type,zip) {//event
        $rootScope.$broadcast("zipCodeUpdated",{
            type: type, zipCode:zip
        });
        console.log("Type: " + type + " " + zip);
    }
    $scope.copyAddress = function(){
        $scope.zip = $scope.billingZip;
    }
})