/**
 * Created by Fenchelteefee on 27.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('productTable2', productTable2);

    //productTable2.$inject = ['dependency'];

    /* @ngInject */
    function productTable2() {
        var directive = {
            /*       bindToController: true,*/
            transclude: true,
            scope: {value: "=productTable", data: "=productData"},
            controller: controller,
            /*         controllerAs: 'vm',*/
            /*            link: link,*/
            /*      restrict: 'A',*/

        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    //ControllerName.$inject = ['dependency'];

    /* @ngInject */
    function controller($scope, $element, $attrs) {
        this.updateTotal = function () {
            var total = 0;
            for (var i = 0; i < $scope.data.length; i++) {
                //var obj = $scope[i];
                total += Number($scope.data[i].quantity);
            }
            $scope.value = total;
        }
    }

})();

