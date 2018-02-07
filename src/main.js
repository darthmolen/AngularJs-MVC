(function() {
    angular.module("App", ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'src/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                });
        });
})();