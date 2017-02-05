/**
 * Created by Fenchelteefee on 03.10.2016.
 */

(function () {
    'use strict';

    angular
        .module('donExampleApp.ControllersServiceValues',[])
        .controller('dayServiceValueCtrl', dayServiceValueCtrl);

    dayServiceValueCtrl.$inject = ['daysServiceValues'];

    /* @ngInject */
    function dayServiceValueCtrl(daysServiceValues) {
        var vm = this;
        vm.title = 'dayServiceValueCtrl';
        vm.day;
        activate();

        ////////////////

        function activate() {
            vm.day = daysServiceValues.today;
            /*            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];

             vm.day = dayNames[new Date().getDay()];*/
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('donExampleApp')
        .controller('tomorrowServiceValueCtrl', tomorrowServiceValueCtrl);

    tomorrowServiceValueCtrl.$inject = ['daysServiceValues'];// access the custom service by declaring a dependency for it

    /* @ngInject */
    function tomorrowServiceValueCtrl(daysServiceValues) {
        var vm = this;
        vm.title = 'tomorrowServiceValueCtrl';
        vm.day;

        activate();

        ////////////////

        function activate() {
            vm.day = daysServiceValues.tomorrow;
            /*AngularJS uses dependency injection to locate the days service and pass it as an argument to the factory function,
             which means I can then get the value of the today and tomorrow properties and use the $scope service to pass them
             to the view*/
            /*            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];
             vm.day = dayNames[new Date().getDay() + 1 % 7];*/
        }
    }

})();
