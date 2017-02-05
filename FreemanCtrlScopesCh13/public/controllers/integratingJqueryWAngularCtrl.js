/**
 * Created by Fenchelteefee on 18.10.2016.
 */
$(document).ready(function () {
    $('#jqui button').button().click(function (e) {
        //Updating the AngularJS scope in Response to the jQuery UI Click in the controllers.html File
        angular.element(angularRegion).scope().$apply('handleClick()');
        alert("jQuery UI Button was clicked");
    });
});

angular
    .module('donXample')
    .controller('integrateJqueryCtrl', function ($scope) {
        $scope.buttonEnabled = true;
        $scope.clickCounter = 0;

        $scope.handleClick = function () {
            $scope.clickCounter++;
        }

//Controlling the jQuery UI Button State from AngularJS in the controllers.html File
        $scope.$watch('buttonEnabled', function (newValue) {
            $('#jqui button').button({
                disabled: !newValue
            })
        })
    })
