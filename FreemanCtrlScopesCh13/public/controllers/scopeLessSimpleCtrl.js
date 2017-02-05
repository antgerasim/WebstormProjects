/**
 * Created by Fenchelteefee on 15.10.2016.
 */
angular.module('donXample')
    .controller('scopeLessSimpleCtrl', function () {
        this.dataValue = "Hello, Adam";
        this.reverseText = function () {
            this.dataValue = this.dataValue.split('').reverse().join('');
        }
    });