/**
 * Created by Fenchelteefee on 20.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('jqLiteGet', jqLiteGet);

    //jqLiteGet.$inject = ['dependency'];

    /* @ngInject */
    function jqLiteGet() {
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

                if (items.eq(i).text() == "Oranges") {
                    items.eq(i).css('font-weight', 'bold');
                }else {
                    //items.eq(i).css('font-style','italic')
                    items.eq(i).css('font-weight','normal')

                }
            }
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

