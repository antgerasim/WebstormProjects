/**
 * Created by Fenchelteefee on 24.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('scopeDemo4', scopeDemo4);

    /*  scopeDemo4.$inject = ['dependency'];*/

    /* @ngInject */
    function scopeDemo4() {
        var directive = {
            //controllerAs:'c',
            template: template,
            scope: {
                local:"@nameprop" //nameprop="{{c.data.name}}" in view
            }
        };
        return directive;

        function template() {
            return angular.element(
                document.querySelector('#scopeTemplate')
            ).html();
        }

        /*        function link(scope, element, attrs) {

         }*/
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

