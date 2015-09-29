(function () {
    var app = angular.module('demoApp', ['ngRoute',
        'textAngular',
        'ui.tree',
        'ui.bootstrap']);
    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                controller: 'demoApp.CustomersController',
                templateUrl: 'app/main/main.html',
                controllerAs: 'vm'
            })
                .when('/project', {
                controller: 'demoApp.ProjectCollaborationController',
                templateUrl: 'app/components/project.collaboration/project.collaboration.html',
                controllerAs: 'vm'
            });
        }]);
})();

//# sourceMappingURL=app.module.js.map