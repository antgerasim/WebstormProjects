/**
 * Created by Fenchelteefee on 25.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('scopeDemo6', scopeDemo6);

    /*    scopeDemo6.$inject = ['dependency'];*/

    /* @ngInject */
    function scopeDemo6() {
        var directive = {
            template: template,
            scope: {
                local: "=nameprop",
                cityFn: "&city" //The & prefix tells AngularJS that I want to bind the value of the specified attribute to a function
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

