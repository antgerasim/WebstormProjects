/**
 * Created by Fenchelteefee on 19.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('demoDirective', demoDirective);

    //jqliteDir.$inject = ['dependency'];

    /* @ngInject */
    function demoDirective() {
        var directive = {
            bindToController: true,
            controller: 'jqliteCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('directive is working');
            var items = element.children();//only direct descendents
            for (var i = 0; i < items.length; i++) {
                if (items.eq(i).text() == "Oranges") {
                    items.eq(i).css("font-weight", "bold");
                }
            }
        }
    }

    //ControllerName.$inject = ['dependency'];

    /* @ngInject */
    /*    function ControllerName(dependency) {

     }*/

})();

