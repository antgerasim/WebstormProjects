/**
 * Created by Fenchelteefee on 03.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .controller('defaultCtrl5', defaultCtrl5);

    defaultCtrl5.$inject = ['$location','$anchorScroll'];

    /* @ngInject */
    function defaultCtrl5($location,$anchorScroll) {
        var vm = this;
        vm.title = 'defaultCtrl5';
        vm.itemCount = 50;
        vm.items = [];
        vm.show = show;

        activate();

        ////////////////

        function activate() {
            //populate items array
            for (var i = 0; i < vm.itemCount; i++) {
                vm.items[i] = "Item " + i;
            }
        }

        function show(id){
            $location.hash(id);
            if(id == 'bottom'){
                $anchorScroll();
            }
        }
    }

})();

