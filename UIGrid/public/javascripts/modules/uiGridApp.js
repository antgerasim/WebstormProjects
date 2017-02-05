/**
 * Created by Fenchelteefee on 10.12.2016.
 */
angular
    .module('UIGrid_App',
        [
        'ngRoute',
            'ngAnimate',                // support for CSS-based animations
            'ngTouch',                  //for touch-enabled devices
            'ui.grid',                  //data grid for AngularJS
            'ui.grid.pagination',       //data grid Pagination
            'ui.grid.resizeColumns',    //data grid Resize column
            'ui.grid.moveColumns',      //data grid Move column
            'ui.grid.pinning',          //data grid Pin column Left/Right
            'ui.grid.selection',        //data grid Select Rows
            'ui.grid.autoResize',       //data grid Enabled auto column Size
            'ui.grid.exporter',          //data grid Export Data
            //crudservice
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/training',{
                templateUrl:'/views/training.html'
            })
            .when('/beginning',{
                templateUrl:'/views/beginning.html'
            })
            .when('/footer',{
                templateUrl:'/views/footer.html'
            })
            .otherwise({
                templateUrl:'/views/start.html'
            })
    })

//ngmod