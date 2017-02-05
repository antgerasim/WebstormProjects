/**
 * Created by Fenchelteefee on 03.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl4', defaultCtrl4);

    defaultCtrl4.$inject = ['$scope','$location'];

    /* @ngInject */
    function defaultCtrl4($scope, $location) {
        var vm = this;
        vm.title = 'defaultCtrl';

        $scope.$on('$locationChangeSuccess', function (event, newUrl) {
            vm.url = newUrl;
        });

        vm.setUrl = function (component) {
            switch (component){
                case 'reset':
                    $location.path('slocationserviceevents');
                    $location.hash('');
                    $location.search('');
                    break;
                case "path":
                    $location.path("/cities/london");
                    break;
                case "hash":
                    $location.hash('north');
                    break;
                case 'search':
                    $location.search('select','hotels');
                    break;
                case "url":
                    $location.url('/cities/london?select=hotels#north');
            }
        }

        activate();

        ////////////////

        function activate() {
            //code
        }


    }

})();

