/**
 * Created by Fenchelteefee on 20.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('jqliteEventHandler', jqliteEventHandler);

    /*    jqliteEventHandler.$inject = ['dependency'];*/

    /* @ngInject */
    function jqliteEventHandler() {
        var directive = {
            bindToController: true,
            controller: 'jqliteListElemensCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            var listElem = angular.element('<ol>')
            element.append(listElem);
            for (var i = 0; i < scope.vm.names.length; i++) {
                listElem.append(angular.element('<li>')
                    .append(angular.element('<span>').text(scope.vm.names[i])));
            }
/*            var buttons = element.find("button");
             buttons.on("click", function (e) {
             element.find("li").toggleClass("bold");
             });*/
            var buttons = element.find('button');
            buttons.on('click', function (e) {
                element.find('li').toggleClass('bold')
            })
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();


