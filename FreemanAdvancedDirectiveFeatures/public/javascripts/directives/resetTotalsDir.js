/**
 * Created by Fenchelteefee on 27.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('resetTotals', resetTotals);

    //resetTotals.$inject = ['dependency'];

    /* @ngInject */
    function resetTotals() {
        var directive = {
            //bindToController: true,
            //controller: ControllerName,
            //controllerAs: 'vm',
            scope: scope,
            template: template,
            require: require,
            link: link,
            restrict: 'A'

        };
        return directive;

        function template() {
            return document.querySelector('#resetTemplate').outerText;
        }

        function scope() {
            return {data: "=productData", propname: "@propertyName"};

        }

        function require() {
            return "^productTable2";
        }

        function link(scope, element, attrs, ctrl) {
            scope.reset = function () {
                for (var i = 0; i < scope.data.length; i++) {
                    //var obj = scope.data[i];
                    scope.data[i][scope.propname] = 0;
                }
                ctrl.updateTotal();
            }
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

