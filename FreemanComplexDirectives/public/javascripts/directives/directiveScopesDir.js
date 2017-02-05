/**
 * Created by Fenchelteefee on 22.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('scopeDemo', scopeDemo);

    /*    scopeDemo.$inject = ['dependency'];*/

    /* @ngInject */
    function scopeDemo() {
        var directive = {
            template: '<div class="panel-body">Name: <input type="text" ng-model="name"></div>'
        };
        return directive;

        /*      function link(scope, element, attrs) {
         console.log("ficken?");
         }*/
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

/*(function () {
 'use strict';

 angular
 .module('moduleName')
 .directive('directiveName', directiveName);

 directiveName.$inject = ['dependency'];

 //When set to true in a directive with isolated scope that uses controllerAs, the component’s properties are bound
 //to the controller rather than to the scope.

 /!* @ngInject *!/
 function directiveName(dependency) {
 var directive = {
 bindToController: true,
 controller: ControllerName,
 controllerAs: 'vm',
 link: link,
 restrict: 'A',
 scope: {}//directive with isolated scope without property definition
 };
 return directive;

 function link(scope, element, attrs) {

 }
 }

 ControllerName.$inject = ['dependency'];

 /!* @ngInject *!/
 function ControllerName(dependency) {

 }

 })();*/



/*weiter mit 429*/

