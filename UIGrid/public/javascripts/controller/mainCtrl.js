/**
 * Created by Fenchelteefee on 04.12.2016.
 */
(function () {
    'use strict';

    angular
        .module('UIGrid_App')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['crudService2', 'uiGridConstants'];

    /* @ngInject */
    function mainCtrl(crudService2, uiGridConstants) {
        var vm = this;
        vm.title = 'mainCtrl';
        vm.gridOptions = [];
        vm.pagination = {};
        vm.loaderMore = false;//default bool value
        vm.lblMessage = 'loading please wait....!';
        vm.result = "color-green";
        vm.selectedRow = {};
        vm.highlightFilteredHeader = '';

        vm.GetProducts = GetProducts;
        vm.highlightFilteredHeader = highlightFilteredHeader;
        vm.GetByID = GetByID

        activate();

        ////////////////

        function activate() {
            initPagination();
            //initGridOptions();
            GetProducts();

        }


        //pagination
        function initPagination() {
            vm.pagination = {
                paginationPageSizes: [15, 25, 50, 75, 100, "All"],
                ddlpageSize: 15,
                pageNumber: 1,
                pageSize: 15,
                totalItems: 0,

                getTotalPages: function () {
                    return Math.ceil(this.totalItems / this.pageSize);
                },
                pageSizeChange: function () {
                    if (this.ddlpageSize == "All")
                        this.pageSize = vm.pagination.totalItems;
                    else
                        this.pageSize = this.ddlpageSize

                    this.pageNumber = 1
                    vm.GetProducts();
                },
                firstPage: function () {
                    if (this.pageNumber > 1) {
                        this.pageNumber = 1
                        vm.GetProducts();
                    }
                },
                nextPage: function () {
                    if (this.pageNumber < this.getTotalPages()) {
                        this.pageNumber++;
                        vm.GetProducts();
                    }
                },
                previousPage: function () {
                    if (this.pageNumber > 1) {
                        this.pageNumber--;
                        vm.GetProducts();
                    }
                },
                lastPage: function () {
                    if (this.pageNumber >= 1) {
                        this.pageNumber = this.getTotalPages();
                        vm.GetProducts();
                    }
                }
            };
        }

        /*        function initGridOptions() {
         vm.gridOptions = {
         useExternalPagination: true,
         useExternalSorting: true,
         enableFiltering: true,
         enableSorting: true,
         enableRowSelection: true,
         enableSelectAll: true,
         enableGridMenu: true,

         columnDefs: [
         {
         name: "ProductID",
         displayName: "Product ID",
         width: '10%',
         headerCellClass: vm.highlightFilteredHeader
         },
         {
         name: "ProductTitle",
         title: "Product Title",
         width: '40%',
         headerCellClass: vm.highlightFilteredHeader
         },
         {name: "Type", title: "Type", headerCellClass: vm.highlightFilteredHeader},
         {
         name: "Price", title: "Price", cellFilter: 'number',
         filters: [{
         condition: uiGridConstants.filter.GREATER_THAN,
         placeholder: 'Minimum'
         }, {condition: uiGridConstants.filter.LESS_THAN, placeholder: 'Maximum'}],
         headerCellClass: vm.highlightFilteredHeader
         },
         {
         name: "CreatedOn",
         displayName: "Created On",
         cellFilter: 'date:"short"',
         headerCellClass: vm.highlightFilteredHeader
         },
         {
         name: 'Edit',
         enableFiltering: false,
         enableSorting: false,
         width: '5%',
         enableColumnResizing: false,
         cellTemplate: '<span class="label label-warning label-mini">' +
         '<a href="" style="color:white" title="Select" ng-click="grid.appScope.GetByID(row.entity)">' +
         '<i class="fa fa-check-square" aria-hidden="true"></i>' +
         '</a>' +
         '</span>'
         }
         ],
         exporterAllDataFn: function () {
         return getPage(1, vm.gridOptions.totalItems, paginationOptions.sort)
         .then(function () {
         vm.gridOptions.useExternalPagination = false;
         vm.gridOptions.useExternalSorting = false;
         //getPage = null;
         });
         },
         };


         result.then(
         function (response) {
         vm.pagination.totalItems = response.data.recordsTotal;
         vm.gridOptions.data = response.data.productList;
         vm.loaderMore = false;
         },
         function (error) {
         console.log("Error: " + error);
         }
         );
         }*/

        function GetProducts() {

            vm.loaderMore = true;
            vm.lblMessage = 'loading please wait....!';
            vm.result = "color-green";

            vm.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
                if (col.filters[0].term) {
                    return 'header-filtered';
                } else {
                    return '';
                }
            };

            vm.gridOptions = {
                useExternalPagination: true,
                useExternalSorting: true,
                enableFiltering: true,
                enableSorting: true,
                enableRowSelection: true,
                enableSelectAll: true,
                enableGridMenu: true,

                columnDefs: [
                    {
                        name: "ProductID",
                        displayName: "Product ID",
                        width: '10%',
                        headerCellClass: vm.highlightFilteredHeader
                    },
                    {
                        name: "ProductTitle",
                        title: "Product Title",
                        width: '40%',
                        headerCellClass: vm.highlightFilteredHeader
                    },
                    {name: "Type", title: "Type", headerCellClass: vm.highlightFilteredHeader},
                    {
                        name: "Price", title: "Price", cellFilter: 'number',
                        filters: [{
                            condition: uiGridConstants.filter.GREATER_THAN,
                            placeholder: 'Minimum'
                        }, {condition: uiGridConstants.filter.LESS_THAN, placeholder: 'Maximum'}],
                        headerCellClass: vm.highlightFilteredHeader
                    },
                    {
                        name: "CreatedOn",
                        displayName: "Created On",
                        cellFilter: 'date:"short"',
                        headerCellClass: vm.highlightFilteredHeader
                    },
                    {
                        name: 'Edit',
                        enableFiltering: false,
                        enableSorting: false,
                        width: '5%',
                        enableColumnResizing: false,
                        cellTemplate: '<span class="label label-warning label-mini">' +
                        '<a href="" style="color:white" title="Select" ng-click="grid.appScope.GetByID(row.entity)">' +
                        '<i class="fa fa-check-square" aria-hidden="true"></i>' +
                        '</a>' +
                        '</span>'
                    }
                ],
                exporterAllDataFn: function () {
                    return getPage(1, vm.gridOptions.totalItems, paginationOptions.sort)
                        .then(function () {
                            vm.gridOptions.useExternalPagination = false;
                            vm.gridOptions.useExternalSorting = false;
                            //getPage = null;
                        });
                },
            };
            var NextPage = ((vm.pagination.pageNumber - 1) * vm.pagination.pageSize);
            var NextPageSize = vm.pagination.pageSize;
            //var apiRoute = 'api/Product/GetProducts/' + NextPage + '/' + NextPageSize;
            //http://localhost:34744/api/Product/GetProducts/0/15
            var apiRoute = 'http://localhost:34744/api/Product/GetProducts/' + NextPage + '/' + NextPageSize;
            //var result = crudService2.getProducts(apiRoute);
            var apiRoute2 = '/data/products.json';
            var result = crudService2.getProductsLocal(apiRoute2);

            result.then(
                function (response) {
                    vm.pagination.totalItems = response.data.recordsTotal;
                    vm.gridOptions.data = response.data.productList;
                    vm.loaderMore = false;
                },
                function (error) {
                    console.log("Error: " + error);
                });

        }

        function highlightFilteredHeader(row, rowRenderIndex, col, colRenderIndex) {
            if (col.filters[0].term) {
                return 'header-filtered';
            } else {
                return '';
            }
        }

        function GetByID(model) {
            vm.selectedRow = model;
        }

    }

})();

