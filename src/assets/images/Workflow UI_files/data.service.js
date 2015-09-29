var demoApp;
(function (demoApp) {
    var DataService = (function () {
        function DataService($http) {
            this.$http = $http;
        }
        DataService.prototype.getCustomers = function () {
            return this.$http.get('customers.json').then(function (response) {
                return response.data;
            });
        };
        DataService.prototype.getOrder = function (id) {
            return this.$http.get('orders.json', { id: id }).then(function (response) {
                return response.data;
            });
        };
        DataService.prototype.getTreeNode = function () {
            return this.$http.get('tree.node.json').then(function (response) {
                return response.data;
            });
        };
        DataService.$inject = ['$http'];
        return DataService;
    })();
    demoApp.DataService = DataService;
    angular.module('demoApp')
        .service('demoApp.dataService', DataService);
})(demoApp || (demoApp = {}));

//# sourceMappingURL=../services/data.service.js.map