/**
 * Created by Fenchelteefee on 18.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('unorderedList2', unorderedList2);

    //unorderedList.$inject = ['dependency'];

    /* @ngInject */
    function unorderedList2() {
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

            var data = scope.vm[attrs["unorderedList2"]];

            //first list list-property="name"
            var propertyName = attrs['listProperty'];//whose values will be displayed in the li items
         if (angular.isArray(data)) {
                var listElem = angular.element("<ul>");
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    //listElem.append(angular.element('<li>').text(data[i].name)); dependency on name here! Instead
                    var propValue = data[i][propertyName];//get value of name property in the array indexed by i
                    console.log(propValue);
                    var element = angular.element('<li>').text(data[i][propertyName]);//add <li> element node to the DOM
                    console.log(element);
                    listElem.append(element);
                }
                //close <ul> tag
/*               var listElemClose = angular.element('</ul>');
                element.append(listElemClose);*/
            }
            //second list list-property1="category"
/*            propertyName = attrs['listProperty1'];
            if (angular.isArray(data)) {
                var listElem = angular.element('<ul>');
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    var propValue = data[i][propertyName];
                    console.log(propValue);
                    var element = angular.element('<li>').text(propValue);
                    console.log(element);
                    listElem.append(element);
                }
            }
            //third list list-property1="category"
            propertyName = attrs['listProperty2'];
            if (angular.isArray(data)) {
                var listElem = angular.element('<ol>');
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    var propValue = data[i][propertyName];
                    var element = angular.element('<li>').text(propValue);
                    listElem.append(element);
                }
            }
            //fourth list  list-property3="expiry"
            propertyName = attrs['listProperty3'];
            if (angular.isArray(data)) {
                var listElem = angular.element('<ul>');
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    var propValue = data[i][propertyName];
                    var element = angular.element('<li>').text(propValue);
                    listElem.append(element);
                }
            }*/
        }
    }
})();


//link fx provides the means to link the directive with thw HTML in the document and the data in the scope.
//implementation code will go here
//var data = scope[attrs["unorderedList"]];