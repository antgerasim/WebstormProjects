/**
 * Created by Fenchelteefee on 19.10.2016.
 */
/*(function () {*/
'use strict';

angular
    .module('donXample')
    .directive('unorderedList4', unorderedList4);

//unorderedList3.$inject = ['dependency'];

/* @ngInject */
function unorderedList4() {
    var directive = {
        bindToController: true,
        controller: 'changeValuesCtrl',//use string('') if ctrl is defined outside
        controllerAs: 'vm',
        link: link,
        restrict: 'A',
        scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
        var data = scope.vm[attrs['unorderedList4']];
        var propertyExpression = attrs['listProperty'];

        if (angular.isArray(data)) {
            var listElem = angular.element("<ul>");
            element.append(listElem);
            for (var i = 0; i < data.length; i++) {
                (function () {//IIFE
                    var itemElement = angular.element('<li>');
                    listElem.append(itemElement);
                    var index = i;
                    var watcherFn = function (watchScope) {
                        return watchScope.$eval(propertyExpression, data[index]);
                    }
                    scope.$watch(watcherFn, function (newValue, oldValue) {
                        itemElement.text(newValue);
                    });
                }());
            }
        }
    }
}


/*    'defaultCtrl'.$inject = ['dependency'];

 /!* @ngInject *!/
 function 'defaultCtrl'(dependency) {

 }*/

/*})();*/
