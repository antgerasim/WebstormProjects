/**
 * Created by Fenchelteefee on 23.07.2016.
 */

var model = {
    user: "Adam"
};

var jetbrains =  angular.module("jetbrains", []);

jetbrains.controller("AppCtrl", function ($http) {
    var app = this;

    $http.get("../public/todo.json").success(function (data) {
        app.actions = data;
    });
/*    $http.get("http://localhost:3000").success(function (products) {
     app.products = products;
     });*/
});