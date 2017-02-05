/**
 * Created by Fenchelteefee on 26.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('productItem', productItem);

    //productItem.$inject = ['dependency'];

    /* @ngInject */
    function productItem() {
        var directive = {
/*            bindToController: true,
            controller: ControllerName,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}*/
            template: document.querySelector("#productTemplate").outerText
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

