/**
 * Created by Fenchelteefee on 26.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('panel', panel);

    //panel.$inject = ['dependency'];

    /* @ngInject */
    function panel() {
        var directive = {
            /*            bindToController: true,
             controller: 'defaultCtrl',
             controllerAs: 'vm',*/
            link: link,
            restrict: 'E',
            scope: true,
            template: template,
            transclude: true//==controllers scope
            //transclude: false//==directive scope (dont work)
        };
        return directive;

        function link(scope, element, attrs) {
            scope.dataSource = 'directive';
            //scope.$parent.c.dataSource = 'directive';
        }

        function template() {
            return angular.element(
                document.querySelector('#template')
            ).html();
        }
    }

    /*
     ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

