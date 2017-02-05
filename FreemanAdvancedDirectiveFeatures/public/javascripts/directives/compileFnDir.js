/**
 * Created by Fenchelteefee on 26.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .directive('simpleRepeater', simpleRepeater);

    //compileFnDir.$inject = ['dependency'];

    /* @ngInject */
    function simpleRepeater() {
        var directive = {

            scope: {
                data: '=source',
                propName: '@itemName'
            },
            transclude: 'element',//repeat each tr element for each product object
            compile: compile
        };
        return directive;

        function link(scope, element, attrs) {

        }

        function compile(element, attrs, transcludeFn) {//compile functions return a link function
            return function ($scope, $element, $attr) {//this is a link fn inside the compile fn
                $scope.$watch('data.length', function () {
                    var parent = $element.parent();
                    parent.children().remove();
                    for (var i = 0; i < $scope.data.length; i++) {
                        /*       var obj = $scope[i];*/
                        var childScope = $scope.$new();
                        childScope[$scope.propName] = $scope.data[i];
                        transcludeFn(childScope, function (clone) {
                            parent.append(clone);
                        });
                    }
                })
            }
        }
    }

    /*    ControllerName.$inject = ['dependency'];

     /!* @ngInject *!/
     function ControllerName(dependency) {

     }*/

})();

/*The compile function is supposed to manipulate the DOM only, so it is not provided with a scope, but a link
 function returned by a compile function can declare dependencies on $scope, $element, and $attrs arguments,
 which correspond to their regular link function counterparts.
 Don’t worry if this doesn’t make sense; the reason that I used a compile function is solely so I can get a link
 function that has a scope and can call the transclusion function. As you’ll see, that’s the key combination to creating a
 directive that can repeat content.*/


/*The first thing I do in the link function is set up a watcher on the scope for the data.length property so that I can
respond when the number of data item changes. I use the $watch method, which I described in Chapter 13. (I don’t
have to worry about the individual properties of the data objects since they will be data bound in the transcluded
template.)
Within the watcher function I use jqLite to locate the parent of the element to which the directive has been
applied and then remove its children. I have to work with the parent element because I set the transclude property to
element, which means that I want to add and remove copies of the directive’s element.*/

/*The next step is to enumerate the data objects. I create a new scope by calling the $scope.$new method.
 This allows me to assign a different object to the item property for each instance of the transcluded content, which
 I clone like this: transcludeFn(childScope, function (clone) {
 parent.append(clone);
 });*/

