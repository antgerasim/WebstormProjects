/**
 * Created by Fenchelteefee on 23.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('scopeDemo2', scopeDemo2);

    /*    scopeDemo2.$inject = ['dependency'];*/

    /* @ngInject */
    function scopeDemo2() {
        var directive = {
            template: '<div class="panel-body">Name: <input type="text" ng-model="name"></div>',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    ControllerName.$inject = ['dependency'];

    /* @ngInject */
    function ControllerName(dependency) {

    }

})();

