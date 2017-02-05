/**
 * Created by Fenchelteefee on 30.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('triButton', triButton);

    //triButton.$inject = ['dependency'];

    /* @ngInject */
    function triButton() {
        var directive = {
/*            bindToController: true,
            controller: ControllerName,
            controllerAs: 'vm',*/
            link: link,
            scope: {counter: "=counter"}
        };
        return directive;

        function link(scope, element, attrs) {
            //attach event handler function for one or more events to the selected element.
            element.on('click', function (event) {
                console.log("Button click: " + event.target.innerText);
                scope.$apply(function () {
                    scope.counter++;
                });
            })
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

