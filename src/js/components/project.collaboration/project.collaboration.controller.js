var demoApp;
(function (demoApp) {
    'use strict';
    var ProjectCollaborationController = (function () {
        function ProjectCollaborationController() {
            this.workflowMedias = null;
            this.workflowStages = null;
            this.project_clients = null;
            this.members = null;
            this.selected_client = null;
            this.workflowMedias = [
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' }
            ];
            this.workflowStages = [
                { no: 1, name: 'Workflow stage name 1' },
                { no: 2, name: 'Workflow stage name 2' }
            ];
            this.project_clients = [
                { id: 1, name: 'Jack' },
                { id: 2, name: "Richard" }
            ];
            this.members = [
                { id: 1, name: "Jack Daniels", email: "jack@daniels.com", role: "Administrator" },
                { id: 2, name: "Richard Hennessy", email: "richard@hennessy.com", role: "Administrator" }
            ];
        }
        return ProjectCollaborationController;
    })();
    angular
        .module('demoApp')
        .controller('demoApp.ProjectCollaborationController', ProjectCollaborationController);
})(demoApp || (demoApp = {}));

//# sourceMappingURL=../../components/project.collaboration/project.collaboration.controller.js.map