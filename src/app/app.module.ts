((): void => {

    var app = angular.module('demoApp', 
        ['ngRoute', 
         'textAngular', 
         'ui.tree',
         'ui.bootstrap']);

    app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/',
        {
            controller: 'demoApp.CustomersController',
            templateUrl: 'app/main/main.html',
            controllerAs: 'vm'
        })
        .when('/project-dashboard',
        {
            controller: 'demoApp.ProjectCollaborationController',
            templateUrl: 'app/components/project.collaboration/project.collaboration.html',
            controllerAs: 'vm'
        });
    }]);
})();
