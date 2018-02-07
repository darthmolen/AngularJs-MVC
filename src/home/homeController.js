(function() {
    angular.module("App")
        .controller('homeController', homeController);

    homeController.$inject = ['$rootScope'];

    function homeController(Page, $rootScope) {
        vm = this;
        vm.pageTitle = 'Home';
    };
})();