var demoApp;
(function (demoApp) {
    'use strict';
    var WorkflowDashboard = (function () {
        function WorkflowDashboard(dataService) {
            var _this = this;
            this.dataService = dataService;
            this.workflows = null;
            this.workflow_stages = null;
            dataService
                .getTreeNode()
                .then(function (results) {
                _this.workflows = results;
            });
            this.workflow_stages = [
                { no: 1, name: 'Workflow Name 1' },
                { no: 2, name: 'Workflow Name 2' }
            ];
        }
        WorkflowDashboard.$inject = ['demoApp.dataService'];
        return WorkflowDashboard;
    })();
    angular
        .module('demoApp')
        .controller('demoApp.WorkflowDashboardController', WorkflowDashboard);
})(demoApp || (demoApp = {}));

//# sourceMappingURL=../../../components/dashboards/workflow/workflow.controller.js.map