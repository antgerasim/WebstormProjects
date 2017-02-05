/**
 * Created by Fenchelteefee on 08.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donHomeIndex')
        .controller('singleTopicController', singleTopicController);

    singleTopicController.$inject = ['dataService', '$window', '$routeParams'];

    /* @ngInject */
    function singleTopicController(dataService, $window, $routeParams) {
        var vm = this;
        vm.title = 'singleTopicController';
        vm.topic = null;
        vm.newReply = {};
        vm.addReply = addReply;

        activate();

        ////////////////

        function activate() {
            dataService.getTopicById($routeParams.id)
                .then(function (topic) {
                    //success
                    vm.topic = topic;

                }, function () {
                    //error
                    $window.location = "#/";
                });
        }

        function addReply() {
            dataService.saveReply(vm.topic, vm.newReply)
                .then(function () {
                    //success
                    vm.newReply.body = "";  //after successful saving reply to DB, clear variable
                }, function () {
                    //error
                    alert("could not save the new reply")
                });
        }
    }
})();




