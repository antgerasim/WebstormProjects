/**
 * Created by Fenchelteefee on 18.10.2016.
 */

/*angular.module('donXample')
 .directive('unorderedList', function () {
 return function (scope, element, attrs) {
 // implementation code will go here
 var test = attrs["unorderedList"];
 var data = scope[attrs["unorderedList"]];
 if (angular.isArray(data)) {
 for (var i = 0; i < data.length; i++) {
 console.log("Item: " + data[i].name);
 }
 }
 }
 });*/
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedList', unorderedList);

    //unorderedList.$inject = ['dependency'];

    /* @ngInject */
    function unorderedList() {
        var directive = {
            bindToController: true,
            controller: 'defaultCtrl',//Achtung must use string ('')
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            //link fx provides the means to link the directive with thw HTML in the document and the data in the scope.
            //implementation code will go here
            //var data = scope[attrs["unorderedList"]];
            var test = attrs["unorderedList"];

            /*            var data1 = scope.vm[attrs["unorderedList"]];
             var data2 = scope.vm.products;
             var data3 = scope.vm[test];*/

            //var data = scope[attrs["unorderedList"]];
            /*         for (var prop in attrs){
             if(attrs.hasOwnProperty(prop)){
             console.log(prop)
             }
             }*/

            /*      for (var i = 0; i<attrs.length;i++){
             console.log('donAttributeTest:' + i)
             }*/

            var testData = attrs["donTestAttr"];
            var data = scope.vm[attrs["unorderedList"]];

            if (angular.isArray(data)) {
                var listElem = angular.element("<ul>");
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    listElem.append(angular.element('<li>').text(data[i].name));
                }
            }

            /*       if (angular.isArray(data4)) {
             for (var i = 0; i < data4.length; i++) {
             console.log("Item: " + data4[i].name);
             }
             }*/
        }
    }

    //ControllerName.$inject = ['dependency'];

    /* @ngInject */
    /*        function ControllerName(dependency) {

     }*/

})();

