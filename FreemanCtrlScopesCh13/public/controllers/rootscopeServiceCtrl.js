/**
 * Created by Fenchelteefee on 13.10.2016.
 */
angular.module("donXample")
    .service('ZipCodes', function ($rootScope) {
        return {
            setZipCode: function (type, zip) {
                this[type] = zip;
                $rootScope.$broadcast('zipCodeupdated', {
                    type: type, zipCode: zip
                });
            }
        }
    })
    .controller('rootscopeServiceCtrl', function ($scope, ZipCodes) {
        $scope.$on('zipCodeUpdated', function (event, args) {
            $scope[args.type] = args.zipCode;
        });
        $scope.setAddress = function (type, zip) {
            ZipCodes.setZipCode(type, zip);
            console.log('Type: ' + type + " " + zip);
        };
        $scope.copyAddress = function () {
            $scope.zip = $scope.billingZip;
        }
    });

/*
The ZipCodes service declares a dependency on the $rootScope service and uses it within the setZipCode
method to call the $broadcast event. The controllers declare a dependency on the ZipCodes service and call the
setZipCode method rather than operate directly on $rootScope. There is no change in the functionality—this
convention is about reducing duplication by putting code that is likely to be required by different controllers in a
single location.*/
