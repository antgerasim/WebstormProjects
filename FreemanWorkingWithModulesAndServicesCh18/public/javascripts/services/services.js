/**
 * Created by Fenchelteefee on 30.10.2016.
 */
angular
    .module('customServices', [])
    .factory('logService', function () {
        var messageCount = 0;
        return {
            log: function (msg) {
                console.log("(LOG + " + messageCount++ + ") " + msg);
            }
        }
    })

/*The object returned by the factory function is the service object and will be used by AngularJS whenever the logService
is requested.

The factory function is called only once because the object it creates and returns is used whenever the service is
required within the application.

 */