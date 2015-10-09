var demoApp;
(function (demoApp) {
    'use strict';
    var WorkflowDashboard = (function () {
        function WorkflowDashboard(dataService) {
            var _this = this;
            this.dataService = dataService;
            this.workflows = null;
            this.workflow_stages = null;
            this.description = null;
            this.accordion_contents = null;
            this.workflowFormStandards = null;
            this.workflowFormAdvances = null;
            this.workflowMedias = null;
            dataService
                .getTreeNode()
                .then(function (results) {
                _this.workflows = results;
            });
            this.workflow_stages = [
                { no: 1, name: 'Workflow Name 1' },
                { no: 2, name: 'Workflow Name 2' }
            ];
            this.description = 'This is a sample description';
            this.accordion_contents = [
                { header: 'Description', is_open: true, template: 'app/components/dashboards/workflow/workflow-stage-content-description.html' },
                { header: 'Form', is_open: true, template: 'app/components/dashboards/workflow/workflow-stage-content-form.html' },
                { header: 'Media', is_open: true, template: 'app/components/dashboards/workflow/workflow-stage-content-media.html' }
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
            this.workflowMedias = [
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' }
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