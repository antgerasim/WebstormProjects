/**
 * Created by Fenchelteefee on 31.10.2016.
 */
//Using the provider Method to Define a Service in the services.js File
angular
    .module('customServices4', [])
    .provider('logService', function () {
        var counter = true;
        var debug = true;
        return {
            messageCounterEnabled: function (setting) {
                if (angular.isDefined(setting)) {
                    counter = setting;
                    return this;
                } else {
                    return counter;
                }
            },
            debugEnabled: function (setting) {
                if (angular.isDefined(setting)) {
                    debug = setting;
                    return this;
                } else {
                    return debug;
                }
            },
            $get: function () {
                return {
                    messageCount: 0,
                    log: function (msg) {
                        if (debug) {
                            console.log("(LOG"
                                + (counter ? " + " + this.messageCount++ + ") " : ") ")
                                + msg);
                        }
                    }
                };
            }
        }
    })


/*The Module.provider method allows you to take more control over the way that a service object is created or configured.
 In Listing 18-11, you can see how I have updated my logging service so that it is defined using the provider method.*/