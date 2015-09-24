var demoApp;
(function (demoApp) {
    'use strict';
    var CustomersController = (function () {
        function CustomersController(dataService) {
            var _this = this;
            this.workflows = null;
            dataService
                .getTreeNode()
                .then(function (results) {
                _this.workflows = results;
            });
        }
        CustomersController.$inject = ['demoApp.dataService'];
        return CustomersController;
    })();
    angular
        .module('demoApp')
        .controller('demoApp.CustomersController', CustomersController);
})(demoApp || (demoApp = {}));

//# sourceMappingURL=../controllers/customers.controller.js.map