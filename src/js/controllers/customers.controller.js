var demoApp;
(function (demoApp) {
    'use strict';
    var CustomersController = (function () {
        function CustomersController(dataService) {
            var _this = this;
            this.workflows = null;
            this.workflowStages = null;
            this.workflowMedias = null;
            dataService
                .getTreeNode()
                .then(function (results) {
                _this.workflows = results;
            });
            this.workflowStages = [
                { no: 1, name: 'Workflow Name 1' },
                { no: 2, name: 'Workflow Name 2' }
            ];
            this.workflowMedias = [
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' }
            ];
        }
        CustomersController.$inject = ['demoApp.dataService'];
        return CustomersController;
    })();
    angular
        .module('demoApp')
        .controller('demoApp.CustomersController', CustomersController);
})(demoApp || (demoApp = {}));

//# sourceMappingURL=../controllers/customers.controller.js.map