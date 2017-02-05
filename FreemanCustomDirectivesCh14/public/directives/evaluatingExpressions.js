/**
 * Created by Fenchelteefee on 19.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedList3', unorderedList3);

    //unorderedList3.$inject = ['dependency'];

    /* @ngInject */
    function unorderedList3() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',//use string('') if ctrl is defined outside
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            var data = scope.vm[attrs['unorderedList3']];
            var propertyExpression = attrs['listProperty'];

            if (angular.isArray(data)) {
                var listElem = angular.element('<ul>');
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    var test = scope.$eval(propertyExpression, data[i]);
                    //use eval in order to use the filter | in html
                    listElem.append(angular.element('<li>').text(scope.$eval(propertyExpression, data[i])));
                }
            }
        }
    }


    /*    'defaultCtrl'.$inject = ['dependency'];

     /!* @ngInject *!/
     function 'defaultCtrl'(dependency) {

     }*/

})();

/*
 390*/
