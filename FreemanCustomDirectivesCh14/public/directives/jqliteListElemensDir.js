/**
 * Created by Fenchelteefee on 20.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('jqliteListElemens', jqliteListElemens);

/*    jqliteListElemens.$inject = ['dependency'];*/

    /* @ngInject */
    function jqliteListElemens() {
        var directive = {
            bindToController: true,
            controller: 'jqliteListElemensCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            var listElem = element.append('<ol>');
            for (var i = 0; i < scope.vm.names.length; i++) {
                listElem
                    .append("<li>")//not work correct - use .append(angular.element('<li>') instead
                    .append('<span>')//not work correct - use .append(angular.element('<span>') instead
                    .text(scope.vm.names[i]);

            }
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

