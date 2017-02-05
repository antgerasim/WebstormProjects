/**
 * Created by Fenchelteefee on 21.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedListTempl', unorderedListTempl);

    /*    unorderedListTempl.$inject = ['dependency'];*/

    /* @ngInject */
    function unorderedListTempl() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {},
            template: "<ul><li ng-repeat='item in data'>{{item.price | currency}}</li></ul>"
        };
        return directive;

        function link(scope, element, attrs) {
            var name = attrs['unorderedListTempl'];
            scope.data = scope.vm[name];

        }
    }

    /*
     ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }
     */

})();


