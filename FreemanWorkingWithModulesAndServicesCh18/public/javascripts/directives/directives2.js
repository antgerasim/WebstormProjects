/**
 * Created by Fenchelteefee on 30.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('customDirectives',[])
        .directive('triButton2', triButton2);

    //triButton.$inject = ['dependency'];

    /* @ngInject */
    function triButton2() {
        var directive = {
/*            bindToController: true,
            controller: ControllerName,
            controllerAs: 'vm',*/
            scope: {counter: "=counter"},
            link: link,
            restrict: 'A'

        };
        return directive;

        function link(scope, element, attrs) {
            element.on("click", function (event) {
                console.log("Button click: " + event.target.innerText);
                scope.$apply(function () {
                    scope.counter++;
                })
            })
        }
    }

/*
    ControllerName.$inject = ['dependency'];

    /!* @ngInject *!/
    function ControllerName(dependency) {

    }
*/

})();

