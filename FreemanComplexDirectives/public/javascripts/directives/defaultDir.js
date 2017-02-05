/**
 * Created by Fenchelteefee on 20.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedList', unorderedList);

    //defaultDir.$inject = ['dependency'];

    /* @ngInject */
    function unorderedList() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
//get name of array in scope "products"
            var nameArray = attrs['unorderedList'];
//get product array
            var data = scope.vm[nameArray];
            //get expression
            var propExpr = attrs['listProperty'];

            if (angular.isArray(data)) {
                var listElem = angular.element('<ul>');
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    var converted = scope.$eval(propExpr, data[i]);
                    var itemElem = angular.element('<li>').text(converted);
                    listElem.append(itemElem);
                }
            }
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

/*weiter mit 414*/

