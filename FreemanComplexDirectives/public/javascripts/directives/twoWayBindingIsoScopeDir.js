/**
 * Created by Fenchelteefee on 24.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('scopeDemo5', scopeDemo5);

    /*    scopeDemo5.$inject = ['dependency'];*/
/*
    To create a two-way binding, I replace the @ character with the = character when I create the isolated scope so that
    this definition from the previous example:*/

    /* @ngInject */
    function scopeDemo5() {
        var directive = {
            template: template,
            scope: {
                local: "=nameprop"//'@'--> one way binding, '='--> two way binding
            }
        };
        return directive;

        function template() {
            return angular.element(
                document.querySelector("#scopeTemplate")
            ).html();
        }

        /*    function link(scope, element, attrs) {

         }*/
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

