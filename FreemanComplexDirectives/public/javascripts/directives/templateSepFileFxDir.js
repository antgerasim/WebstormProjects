/**
 * Created by Fenchelteefee on 22.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedListSepFileTemplFx', unorderedListSepFileTemplFx);

    /*  unorderedListSepFileTemplFx.$inject = ['dependency'];*/

    /* @ngInject */
    function unorderedListSepFileTemplFx() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {},
            templateUrl: templateUrl
        };
        return directive;

        function link(scope, element, attrs) {
            var name = attrs['unorderedListSepFileTemplFx'];
            scope.data = scope.vm[name];
        }

        function templateUrl(elem, attrs) {
            return attrs['template'] == 'table' ? '/templates/tableTemplate.html'
                : '/templates/itemTemplate.html';
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();


