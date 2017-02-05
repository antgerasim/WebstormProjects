/**
 * Created by Fenchelteefee on 31.10.2016.
 */
//1. Constructor function
var baseLogger = function () {
    this.messageCount = 0;
    this.log = function (msg) {
        console.log(this.msgType + ": " + (this.messageCount++) + " " + msg);
    }
};
//2. Create new constructor function called debugLogger and set its prototype to a new object created using the new keyword
//and the baseLogger keyword. The new keyword creates a new object and copies the properties and functions defined by the
// constructor function to the new object.
var debugLogger = function () {
};
debugLogger.prototype = new baseLogger();
debugLogger.prototype.msgType = "Debug";

var errorLogger = function () {
};
errorLogger.prototype = new baseLogger();
errorLogger.prototype.msgType = "Error";

angular.module("customServices2", [])
    .service("logService", debugLogger)
    .service("errorService", errorLogger);



