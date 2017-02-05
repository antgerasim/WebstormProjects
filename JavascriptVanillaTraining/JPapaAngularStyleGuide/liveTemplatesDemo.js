/**
 * Created by Fenchelteefee on 26.09.2016.
 */
(function () {//ngapp
    'use strict';

    angular
        .module('moduleName', [
            'dependency'
        ]);

})();

(function () {//ngcontroller
    'use strict';

    angular
        .module('moduleName')
        .controller('ControllerName', ControllerName);

    ControllerName.$inject = ['dependency'];

    /* @ngInject */
    function ControllerName(dependency) {
        var vm = this;
        vm.title = 'ControllerName';

        activate();

        ////////////////

        function activate() {
            code
        }
    }



})();

(function () {//ngdirective
    'use strict';

    angular
        .module('moduleName')
        .directive('directiveName', directiveName);

    directiveName.$inject = ['dependency'];

    /* @ngInject */
    function directiveName(dependency) {
        var directive = {
            bindToController: true,
            controller: ControllerName,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    ControllerName.$inject = ['dependency'];

    /* @ngInject */
    function ControllerName(dependency) {

    }

})();

(function () {//ngfactory
    'use strict';

    angular
        .module('moduleName')
        .factory('factoryName', factoryName);

    factoryName.$inject = ['dependency'];

    /* @ngInject */
    function factoryName(dependency) {
        var service = {
            functionName: functionName
        };
        return service;

        ////////////////

        function functionName() {
            code
        }
    }

})();

(function () {//ngfilter
    'use strict';

    angular
        .module('moduleName')
        .filter('filterName', filterName);

    function filterName() {
        return filterNameFilter;

        ////////////////

        function filterNameFilter(parameters) {
            return parameters;
        }
    }

})();


(function () {//ngservice
    'use strict';

    angular
        .module('moduleName')
        .service('ServiceName', ServiceName);

    ServiceName.$inject = ['dependency'];

    /* @ngInject */
    function ServiceName(dependency) {
        this.functionName = functionName;

        ////////////////

        function functionName() {
            code
        }
    }

})();

.config(config)//ngconfig

config.$inject = ['dependency'] ;

/* @ngInject */
function config (dependency) {
    code
}
//
angular//ngmodule
    .module('module')
//
.when('/url', {//ngroute
    templateUrl: 'template.html',
    controller: 'ControllerName',
    controllerAs: 'vm'
})
//
.run(runName)//ngrun

runName.$inject = ['dependency'];

/* @ngInject */
function runName (dependency) {
    code
}
//
.state('state', {
    url: '/url',
    templateUrl: 'template.html',
    controller: 'ControllerName',
    controllerAs: 'vm'
})






