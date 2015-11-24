angular.module('esp').controller('catalogController', catalogController);

function catalogController($scope, $http, $q, $dataService, DTOptionsBuilder, DTColumnDefBuilder) {

    $scope.catalogList = [];

    $scope.dtOptions = DTOptionsBuilder.newOptions().withDisplayLength(10).withOption('order', [1, 'desc']);
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0).notSortable(),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3),
        DTColumnDefBuilder.newColumnDef(4)
    ];

    $scope.loadCatalogData = function total() {
        $dataService.getCatalogData().
            success(function (data, status, headers, config) {
                $scope.catalogList = data;
                console.log('$scope.loadData success');
            }).
            error(function (data, status, headers, config) {
                console.log('Sorry, the device list could not be loaded');
            });
    };

    $scope.loadCatalogData();
}
