/**
 * Created by Fenchelteefee on 08.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donHomeIndex')
        .controller('topicsController', topicsController);

    topicsController.$inject = ['dataService'];

    /* @ngInject */
    function topicsController(dataService) {
        var vm = this;
        vm.title = 'topicsController';
        vm.data = dataService;
        //Dont do this, 'cause the topics object wont be able to tell our data property in the scope
        //that it has been updated. AngularJs wont know to update the binding and therefore update the UI.
        //Better bind entire dataservice
        //vm.data = dataService.topics;
        vm.isBusy = false;

        if (dataService.isReady() == false) {
            vm.isBusy = true;

            dataService.getTopics()
                .then(function () {
                    //success
                    //the topics has been loaded to the _topics array in dataService.js factory
                }, function () {
                    //error
                    alert('could not load topics');//alert here instead of factory, because the fac handles only data interaction
                })
                .then(function () {//chaining possible because of promise
                    vm.isBusy = false;
                })
        }
    }

})();

