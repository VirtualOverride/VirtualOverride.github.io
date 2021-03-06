(function () {
    var app = angular.module('demoApp', ['ngRoute',
        'textAngular',
        'ui.tree',
        'ui.bootstrap']);
    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                controller: 'demoApp.CustomersController',
                templateUrl: 'app/main/main.html',
                controllerAs: 'vm'
            })
                .when('/project-dashboard', {
                controller: 'demoApp.ProjectCollaborationController',
                templateUrl: 'app/components/project.collaboration/project.collaboration.html',
                controllerAs: 'vm'
            })
                .when('/client-dashboard', {
                controller: 'demoApp.ClientDashboardController',
                templateUrl: 'app/components/client.dashboard/client.dashboard.html',
                controllerAs: 'vm'
            })
                .when('/workflow-dashboard', {
                templateUrl: 'app/components/dashboards/workflow/workflow.html',
                controller: 'demoApp.WorkflowDashboardController',
                controllerAs: 'vm'
            });
        }]);
})();

//# sourceMappingURL=app.module.js.map