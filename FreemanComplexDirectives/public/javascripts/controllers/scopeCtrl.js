/**
 *
 * Created by Fenchelteefee on 22.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('scopeCtrl', scopeCtrl);

/*    scopeCtrl.$inject = ['dependency'];*/

    /* @ngInject */
    function scopeCtrl() {//do nothing - no behaviours required
        //var vm = this;
        //vm.title = 'scopeCtrl';

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

