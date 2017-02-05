/**
 * Created by Fenchelteefee on 21.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedListRestrict', unorderedListRestrict);

    //unorderedListRestrict.$inject = ['dependency'];

    /* @ngInject */
    function unorderedListRestrict() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',
            controllerAs: 'vm',
            link: link,
            //restrict: 'A',
            restrict: 'EACM',

            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            var data = scope.vm[attrs['unorderedListRestrict'] || attrs['listSource']];
            var propExp = attrs['listProperty'] || 'price | currency';
            if (angular.isArray(data)) {
                var listElem = angular.element('<ul>');
                if (element[0].nodeName == "#comment") {
                    element.parent().append(listElem);
                } else {
                    element.append(listElem);
                }
                for (var i = 0; i < data.length; i++) {
                    /*  var obj = data[i];*/
                    var itemElem = angular.element('<li>')
                        .text(scope.$eval(propExp, data[i]));
                    listElem.append(itemElem);

                }
            }


        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

