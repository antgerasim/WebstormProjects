/**
 * Created by Fenchelteefee on 27.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('productItem2', productItem2);

    //productItem2.$inject = ['dependency'];

    /* @ngInject */
    function productItem2() {
        var directive = {
            /*          bindToController: true,
             controller: ControllerName,
             controllerAs: 'vm',*/
            template: template,
            require: require,//require is for referencing the controllers of other directives
            link: link
            /*         restrict: 'A',*/

        };
        return directive;

        function template() {
            return document.querySelector('#productTemplate').outerText;
        }

        function require() {
            return "^productTable2";
        }

        function link(scope, element, attrs, ctrl) {
            scope.$watch('item.quantity', function () {
                ctrl.updateTotal();
            })
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

