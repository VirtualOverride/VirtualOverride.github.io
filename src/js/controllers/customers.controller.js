var demoApp;
(function (demoApp) {
    'use strict';
    var CustomersController = (function () {
        function CustomersController(dataService) {
            var _this = this;
            this.workflows = null;
            this.workflowStages = null;
            this.workflowMedias = null;
            this.workflowFormStandards = null;
            this.workflowFormAdvances = null;
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
            this.workflowFormStandards = [
                { id: 1, text: 'Title' },
                { id: 2, text: 'Text field' },
                { id: 3, text: 'Checkbox' },
                { id: 4, text: 'Radio buttons' }
            ];
            this.workflowFormAdvances = [
                { id: 1, text: 'Date' },
                { id: 2, text: 'Url' },
                { id: 3, text: 'File Upload' },
                { id: 4, text: 'Email' }
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