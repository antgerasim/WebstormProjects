/**
 * Created by Fenchelteefee on 20.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('fixingJqliteProblem', fixingJqliteProblem);

    //fixingJqliteProblem.$inject = ['dependency'];

    /* @ngInject */
    function fixingJqliteProblem() {
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
            var listElem = angular.element('<ol>');
            element.append(listElem);
            for (var i = 0; i < scope.vm.names.length; i++) {
                listElem
                    .append(angular.element('<li>')
                        .append(angular.element('<span>')
                            .text(scope.vm.names[i])));
            }
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

