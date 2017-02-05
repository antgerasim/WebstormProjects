/**
 * Created by Fenchelteefee on 23.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('scopeDemo3', scopeDemo3);

    /*    scopeDemo3.$inject = ['dependency'];*/

    /* @ngInject */
    function scopeDemo3() {
        var directive = {
            //controllerAs: 'c',
            template: template,
            scope: true
        };
        return directive;

/*        function link(scope, element, attrs) {

        }*/

        function template() {
            var result = angular.element(
                document.querySelector('#scopeTemplate')
            ).html();
            return result;
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

