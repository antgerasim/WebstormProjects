/**
 * Created by Fenchelteefee on 02.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl2', defaultCtrl2);

    defaultCtrl2.$inject = ['$window','$document'];

    /* @ngInject */
    function defaultCtrl2($window,$document) {
        var vm = this;
        vm.title = 'defaultCtrl2';

        $document.find('button').on('click', function (event) {
            $window.alert(event.target.innerText);
        });


        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

