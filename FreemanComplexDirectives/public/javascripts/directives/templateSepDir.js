/**
 * Created by Fenchelteefee on 21.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedListSepTempl', unorderedListSepTempl);

    /*    unorderedListSepTempl.$inject = ['dependency'];*/

    /* @ngInject */
    function unorderedListSepTempl() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {},
            template: template
        };

        return directive;

        function link(scope, element, attrs) {
            scope.data = scope.vm[attrs['unorderedListSepTempl']]
        }

        function template() {
            var result = angular.element(
                document.querySelector('#listTemplate')).html();
            return result;
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

