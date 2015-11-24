angular.module('esp')
    .factory("$dataService", ['$http',
        function($http){
            return {
                getCatalogData : function(){
                    return $http({method: 'GET', url: '/api/getCatalogData?cachebuster=' + (new Date()).getTime()  });
                }
            };
        }
    ]);
