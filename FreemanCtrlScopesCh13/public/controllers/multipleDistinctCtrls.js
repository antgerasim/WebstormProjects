/**
 * Created by Fenchelteefee on 15.10.2016.
 */
angular.module('donXample')
    .controller('firstController', function ($scope) {
        $scope.dataValue = 'Hello, Anton';
        $scope.reverseText = function () {
            $scope.dataValue = $scope.dataValue.split('').reverse().join('');
        }
    })
    .controller('secondController', function ($scope) {
        $scope.dataValue = 'Hello, Tasja';
        $scope.changeCase = function () {
            $scope.dataValue = $scope.dataValue.toUpperCase();
        }
    });