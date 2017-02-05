/**
 * Created by Fenchelteefee on 20.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('demoDirectiveFind', demoDirectiveFind);

    //demoDirectiveFind.$inject = ['dependency'];

    /* @ngInject */
    function demoDirectiveFind() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            var items = element.find('li');
            for (var i = 0; i < items.length; i++) {
                /*      var obj = items[i];*/
                if (items.eq(i).text() == "Oranges") {
                    items.eq(i).css('font-weight', 'bold');
                }

            }
        }
    }


})();

