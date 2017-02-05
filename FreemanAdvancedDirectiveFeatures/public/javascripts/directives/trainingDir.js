/**
 * Created by Fenchelteefee on 29.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('trainingDir', trainingDir);

    // trainingDir.$inject = ['dependency'];

    /* @ngInject */
    function trainingDir() {
        var directive = {
            /*            bindToController: true,
             controller: ControllerName,
             controllerAs: 'vm',*/
            replace: true,
            link: link,
            restrict: 'E',
            require: 'ngModel',
            template: template
            /*      scope: {}*/
        };
        return directive;

        function link(scope, element, attrs, ctrl) {

            element.on("click", function (event) {
                setSelected(event.target.innerText);

                scope.$apply(function () {
                    ctrl.$setViewValue(event.target.innerText);
                })
            });

            ctrl.$render = function () {
                setSelected(ctrl.$viewValue || "Not Sure")
            }

            function setSelected(value) {
                var buttons = element.find('button');//look up by tag name
                buttons.removeClass('btn-primary');

                for (var i = 0; i < buttons.length; i++) {
                    //var btn = buttons[i];
                    var test = buttons.eq(i);
                    if (buttons.eq(i).text() == value) {
                        buttons.eq(i).addClass('btn-primary');
                    }
                }
            }
        }

        function template() {
            var result = document.querySelector('#donTemplate').outerText;
            return result;
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

