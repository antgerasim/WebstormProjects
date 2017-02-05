/**
 * Created by Fenchelteefee on 26.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('productTable', productTable);

    // productTable.$inject = ['dependency'];

    /* @ngInject */
    function productTable() {
        var directive = {
            /*            bindToController: true,
             controller: ControllerName,
             controllerAs: 'vm',
             link: link,
             restrict: 'A',*/
            transclude: true,
            scope: {value: "=productTable", data:"=productData"}
        };
        return directive;

        /*        function link(scope, element, attrs) {

         }*/
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

