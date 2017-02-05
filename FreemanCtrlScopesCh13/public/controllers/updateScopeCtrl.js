/**
 * Created by Fenchelteefee on 11.10.2016.
 */
angular.module('donXample')
    .controller('updateScopeCtrl', function ($scope) {
        $scope.cities = ['London', 'New York', 'Paris'];
        $scope.city = 'London';

        $scope.getCountry = function (city) {
            switch (city) {
                case "London":
                    return "UK";
                case "New York":
                    return "USA";
            }
        }
    });