/**
 * Created by Fenchelteefee on 27.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('triButton4', triButton4);

    //triButton.$inject = ['dependency'];

    /* @ngInject */
    function triButton4() {
        var directive = {
            restrict: 'E',
            replace: true,
            require: "ngModel",//requires the controller in the ngModel directive
            template: template,
            /*    bindToController: true,*/
            /*    controller: ControllerName,*/
            /*      controllerAs: 'vm',*/
            link: link,

            /*   scope: {}*/
        };
        return directive;

        function template() {
            var result = document.querySelector("#triTemplate").outerText;
            return result;
        }

        function link(scope, element, attrs, ctrl) {


            //$formatter maps a new value, Huh? To not sure
            ctrl.$formatters.push(function (value) {
                return value=="Huh?" ? "Not Sure" : value;
            });

            element.on("click", function (event) {
                setSelected(event.target.innerText);

                scope.$apply(function () {
                    ctrl.$setViewValue(event.target.innerText);
                })
            });

            /*'Not sure' as fallback value. The value of $viewValue will be undefined
             when using dynamically defined properties.*/
            ctrl.$render = function () {
                setSelected(ctrl.$viewValue || "Not Sure")
            }

            function setSelected(value) {
                var buttons = element.find('button');//look up by tag name
                buttons.removeClass('btn-primary');
                for (var i = 0; i < buttons.length; i++) {
                    //var btn = buttons[i];
                    if (buttons.eq(i).text() == value) {
                        buttons.eq(i).addClass('btn-primary');
                    }
                }
            }
            //setSelected(scope.dataValue);
        }
    }

    /*
     ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

