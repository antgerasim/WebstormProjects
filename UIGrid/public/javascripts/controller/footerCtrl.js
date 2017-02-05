/**
 * Created by Fenchelteefee on 05.12.2016.
 */
(function () {
    'use strict';

    angular
        .module('UIGrid_App')
        .controller('footerCtrl', footerCtrl);

    footerCtrl.$inject = ['uiGridConstants', '$http'];

    /* @ngInject */
    function footerCtrl(uiGridConstants, $http) {
        var vm = this;
        var data = [];//?
        vm.title = 'footerCtrl';
        vm.gridOptions = {};
        vm.gridApi = {};

        vm.toggleFooter=toggleFooter;
        vm.toggleColumnFooter = toggleColumnFooter;

        activate();

        ////////////////

        function activate() {
            vm.gridOptions = initGridOptions();

            $http.get('/data/500_complex.json')
                .success(function (data) {
                    data.forEach(function (row) {
                        row.registered = Date.parse(row.registered);
                    });
                    vm.gridOptions.data = data;
                });
        }

        function initGridOptions() {
         var  gridOptions = {
                showGridFooter: true,
                showColumnFooter: true,
                enableFiltering: true,
                columnDefs: [
                    {field: 'name', width: '13%'},
                    {field: 'address.street', aggregationType: uiGridConstants.aggregationTypes.sum, width: '13%'},
                    {
                        field: 'age',
                        aggregationType: uiGridConstants.aggregationTypes.avg,
                        aggregationHideLabel:true,
                        width:'13'
                    },
                    {
                        name: 'ageMin',
                        field: 'age',
                        aggregationType: uiGridConstants.aggregationTypes.min,
                        width: '13%',
                        displayName: 'Age for min'
                    },
                    {
                        name: 'ageMax',
                        field: 'age',
                        aggregationType: uiGridConstants.aggregationTypes.max,
                        width: '13%',
                        displayName: 'Age for max'
                    },
                    {
                        name: 'customCellTemplate',
                        field: 'age',
                        width: '14%',
                        footerCellTemplate: '<div class="ui-grid-cell-contents" style="background-color: Red;color: White">custom template</div>'
                    },
                    {
                        name: 'registered',
                        field: 'registered',
                        width: '20%',
                        cellFilter: 'date',
                        footerCellFilter: 'date',
                        aggregationType: uiGridConstants.aggregationTypes.max
                    }
                ],
                data:data,
                onRegisterApi:function (gridApi) {
                    vm.gridApi = gridApi;
                }

            };
         return gridOptions;
        }
        function toggleFooter() {
            vm.gridOptions.showGridFooter = !vm.gridOptions.showGridFooter;
            vm.gridApi.core.notifyDataChange(uiGridConstants.dataChange.OPTIONS);
        }
        function toggleColumnFooter() {
            vm.gridOptions.showColumnFooter = !$scope.gridOptions.showColumnFooter;
            vm.gridApi.core.notifyDataChange(uiGridConstants.dataChange.OPTIONS);
        }
    }

})();



