(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl1', defaultCtrl1);

    //defaultCtrl1.$inject = ['dependency'];

    /* @ngInject */
    function defaultCtrl1() {
        var vm = this;
        vm.title = 'defaultCtrl1';
        vm.htmlData = "<p>This is <b onmouseover=c.alert('Attack!')>dangerous</b> data</p>";

        activate();

        ////////////////

        function activate() {
            //code
        }
    }

})();

