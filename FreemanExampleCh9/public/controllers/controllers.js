/**
 * Created by Fenchelteefee on 03.10.2016.
 */

(function () {
    'use strict';

    angular
        .module('donExampleApp.Controllers',[])//Using Modules to Organize
        .controller('dayCtrl', dayCtrl);

    dayCtrl.$inject = ['daysService'];

    /* @ngInject */
    function dayCtrl(daysService) {
        var vm = this;
        vm.title = 'ControllerName';
        vm.day;
        activate();

        ////////////////

        function activate() {
            vm.day = daysService.today;
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
        .controller('tomorrowCtrl', tomorrowCtrl);

    tomorrowCtrl.$inject = ['daysService'];// access the custom service by declaring a dependency for it

    /* @ngInject */
    function tomorrowCtrl(daysService) {
        var vm = this;
        vm.title = 'tomorrowCtrl';
        vm.day;

        activate();

        ////////////////

        function activate() {
            vm.day = daysService.tomorrow;
            /*AngularJS uses dependency injection to locate the days service and pass it as an argument to the factory function,
             which means I can then get the value of the today and tomorrow properties and use the $scope service to pass them
             to the view*/
            /*            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];
             vm.day = dayNames[new Date().getDay() + 1 % 7];*/
        }
    }

})();
