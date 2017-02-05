/**
 * Created by Fenchelteefee on 31.10.2016.
 */
//Using the provider Method to Define a Service in the services.js File
angular
    .module('customServices4',[])
    .provider('logService', function () {
        return {
            $get: function(){
                return {
                    messageCount:0,
                    log: function (msg) {
                        console.log("(LOG + " + this.messageCount++ + ") " + msg);
                    }
                }
            }
        }
    })


/*The Module.provider method allows you to take more control over the way that a service object is created or configured.
 In Listing 18-11, you can see how I have updated my logging service so that it is defined using the provider method.*/