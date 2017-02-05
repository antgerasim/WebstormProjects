/**
 * Created by Fenchelteefee on 31.10.2016.
 */
angular
    .module('customServices3', [])
    .service('logService', function () {
        return {
            messageCount: 0,
            log: function (msg) {
                console.log("Debug: " + (this.messageCount++) + " " + msg);
            }
        };
    });
/*This isn’t as flexible, and AngularJS will still use the new keyword behind the scenes, but the overall effect is to
 allow the service method to be used as an interchangeable replacement for the factory method but with a more
 immediately meaningful name.*/