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
            templateUrl: 'app/views/customers.html',
            controllerAs: 'vm'
        })
        .when('/orders/:customerId',
        {
            controller: 'demoApp.OrdersController',
            templateUrl: 'app/views/orders.html',
            controllerAs: 'vm'
        });
    }]);
})();
