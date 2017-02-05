/**
 * Created by Fenchelteefee on 30.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('triButton5', triButton5);

    //triButton5.$inject = ['dependency'];

    /* @ngInject */
    function triButton5() {
        var directive = {
            restrict: "E",
            replace: true,
            require: 'ngModel',//requires the ctrl from the NgModel directive
            template: document.querySelector('#triTemplate').outerText,
            link: link
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            var validateParser = function (value) {
                var valid = (value == "Yes" || value == "No");
                ctrl.$setValidity("confidence", valid);
                return valid ? value : undefined;
            }
            //this is the NgModelCtrl, below
            ctrl.$parsers.push(validateParser)//todo check with validateParser()

            element.on("click", function (event) {
                setSelected(event.target.innerText);
                scope.$apply(function () {
                    ctrl.$setViewValue(event.target.innerText);
                })
            });

            var setSelected = function (value) {
                var buttons = element.find("button");
                buttons.removeClass("btn-primary");
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons.eq(i).text() == value) {
                        buttons.eq(i).addClass("btn-primary");
                    }
                }
            }

            /*            var setSelected = function (value) {
             var buttons = element.find('button');
             buttons.removeClass('btn-primary');
             for (var i = 0; i < buttons.length; i++) {
             var obj = buttons.eq(i);
             if (obj.text() == value) {
             obj.addClass('btn-primary');
             }
             }
             }*/
            //init here
            ctrl.$render = function () {

                validateParser(ctrl.$viewValue)//with this doent need to click the Yes button before clicking Not Sure to reveal the validation message.
                setSelected(ctrl.$viewValue || "Not Sure");
            }
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

