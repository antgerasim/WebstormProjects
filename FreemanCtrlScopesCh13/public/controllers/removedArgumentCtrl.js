/**
 * Created by Fenchelteefee on 11.10.2016.
 */
angular.module('donXample')
    .controller('removedArgumentCtrl', function ($scope) {
        $scope.city = "London";//data defined
        $scope.getCountry = function () {//'city' argument removed
            switch ($scope.city) {
                case "London":
                    return "UK";
                case "New York":
                    return "USA";
            }
        }
    });