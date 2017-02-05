/**
 * Created by Fenchelteefee on 22.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedListSepFileTempl', unorderedListSepFileTempl);

    /*    unorderedListSepFileTempl.$inject = ['dependency'];*/

    /* @ngInject */
    function unorderedListSepFileTempl() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {},
            templateUrl:'/templates/itemTemplate.html'
        };
        return directive;

        function link(scope, element, attrs) {
            var name = attrs['unorderedListSepFileTempl'];
            scope.data = scope.vm[name];
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

