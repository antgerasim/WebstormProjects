/**
 * Created by Fenchelteefee on 15.10.2016.
 */

$(document).ready(function () {
    $('#jqui button').button().click(function (e) {
        alert("jQuery UI Button was clicked");
    });
});

angular.module("donXample")
    .controller("defineJqueryCtrl", function ($scope) {
        $scope.buttonEnabled = true;
        $scope.clickCounter = 0;
        $scope.handleClick = function () {
            $scope.clickCounter++;
        }
    });
