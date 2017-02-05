/**
 * Created by Fenchelteefee on 03.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donExampleApp.DirectivesHighlight',[])
        .directive('highlight', highlight);

    //highlight.$inject = ['dependency'];

    /* @ngInject */
    function highlight() {//this is a factory function
        return function (scope, element, attrs) {//this is a worker function/ Angular calls it when encountering the directive in the HTML.
            if (scope.dc.day == attrs['highlight']) {//get value of 'highlight' attribute 'the scope of the view',attributes of that element.
                element.css('color', 'red');//element to which the directive has been applied
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('donExampleApp.DirectivesHighlight2',[])
        .directive('highlight2', highlight2);

    highlight2.$inject = ['$filter'];

    /* @ngInject */
    function highlight2($filter) {
        var dayFilter = $filter('dayName');

        return function (scope, element, attrs) {
            if (dayFilter(scope.tc.day) == attrs['highlight2']) {
                element.css("color", "red");
            }
        }

    }


})();


/*
 The factory function I passed to the directive method is called when AngularJS encounters the highlight
 attribute in the HTML. The directive function that the factory function creates is invoked by AngularJS and is passed
 three arguments: the scope for the view, the element to which the directive has been applied, and the attributes of
 that element.*/

/*Notice that the argument for the directive function is scope and not $scope. I explain why there is no $ sign and
 what the difference is in Chapter 15.*/

/*The factory function I passed to the directive method is called when AngularJS encounters the highlight
 attribute in the HTML. The directive function that the factory function creates is invoked by AngularJS and is passed
 three arguments: the scope for the view, the element to which the directive has been applied, and the attributes of
 that element.*/
