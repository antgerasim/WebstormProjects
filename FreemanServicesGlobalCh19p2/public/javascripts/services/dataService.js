/**
 * Created by Fenchelteefee on 07.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('donXample')
        .factory('dataService', dataService);

    dataService.$inject = ['$http, $q'];

    /* @ngInject */
    function dataService($http, $q) {
        var _topics = [];
        var _isInit = false;

        var service = {//public methods
            isReady: isReady,
            getTopics: getTopics,
            addTopic: addTopic,
            getTopicById: getTopicById,
            saveReply: saveReply

        };
        return service;

        ////////////////

        function isReady() {
            return _isInit;
        }

        function getTopics() {
            /**
             * A deferrer can implement a promise. $q is a special object that allows us to create a deferrer object.
             * This deferrer object can expose the promise, so that the consumer of the getTopics function can use the
             * Syntax of calling 'then'.
             */
            var deferred = $q.defer();

            $http.get('/api/v1/topics/?includeReplies=true')
                .then(function (result) {
                    //successful
                    angular.copy(result.data, _topics);
                    _isInit = true;
                    deferred.resolve();//resolve promise with an successful result

                }, function () {
                    //error
                    deferred.reject();

                });
            return deferred.promise;
        }

        function addTopic(newTopic) {
            var deferred = $q.defer();

            $http.post('/api/v1/topics', newTopic)
                .then(function (result) {
                    //success
                    var newlyCreatedTopic = result.data;
                    _topics.splice(0, 0, newlyCreatedTopic);//inset or delete items inside of an array
                    deferred.resolve(newlyCreatedTopic);
                }, function () {
                    //error
                    deferred.reject()
                })
        }

//private helper method
        function _findTopic(id) {
            var found = null;

            $.each(_topics, function (i, item) {//use jquery each cause angulars hasnt got break!
                if (item.id == id) {
                    found = item;
                    return false;
                }
            })
            return found;
        }

        function getTopicById(id) {
            var deferred = $q.defer();

            if (isReady()) {//if topics are already loaded into _topics[]
                var topic = _findTopic(id);//get specific topic by id
                if (topic) {//if topic not null return promise with topic
                    deferred.resolve(topic);
                } else {
                    deferred.reject();//return promise with error
                }
            } else {//topic array is empty? - load topic over http into array
                getTopics()
                    .then(function () {
                        //success
                        var topic = _findTopic(id);
                        if (topic) {
                            deferred.resolve(topic);
                        } else {
                            deferred.reject();
                        }
                    }, function () {
                        //error
                        deferred.reject();
                    });
            }
            return deferred.promise;
        }

        function saveReply(topic, newReply) {
            var deferred = $q.defer();

            $http.post("/api/v1/topics/" + topic.id + "/replies", newReply)
                .then(function (result) {
                    //success
                    //Id, creationTime are serverside creation properties
                    if (topic.replies == null) {
                        topic.replies = [];
                    }
                    topic.replies.push(result.data);
                    deferred.resolve(result.data);
                }, function () {
                    //error
                    deferred.reject();
                });
            return deferred.promise;
        }
    }
})();


