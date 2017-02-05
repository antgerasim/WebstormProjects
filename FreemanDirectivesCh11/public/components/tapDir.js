/**
 * Created by Fenchelteefee on 07.10.2016.
 */
angular
    .module('tap', [])
    .directive('tap', tap);


function tap() {
    return function (scope, elem, attrs) {
        elem.on("touchstart touchend", function () {
            scope.$apply(attrs["tap"]);
        });
    }
}


