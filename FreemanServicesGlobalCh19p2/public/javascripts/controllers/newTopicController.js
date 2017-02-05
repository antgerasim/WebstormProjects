/**
 * Created by Fenchelteefee on 08.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donHomeIndex')
        .controller('newTopicController', newTopicController);

    newTopicController.$inject = ['$window', 'dataService'];

    /* @ngInject */
    function newTopicController($window, dataService) {
        var vm = this;
        vm.title = 'newTopicController';
        vm.newTopic = {};//will be filled with dynamic props .title and .body in newTopicView
        vm.save = save;

        function save() {
            dataService.addTopic(vm.newTopic)
                .then(function () {
                    //success
                    $window.location = "#/";
                }, function () {
                    //error
                    alert('could not save the new topic');
                });
        }
    }
})();

