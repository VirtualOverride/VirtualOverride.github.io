var demoApp;
(function (demoApp) {
    'use strict';
    var ProjectCollaborationController = (function () {
        function ProjectCollaborationController() {
            this.workflowMedias = null;
            this.workflowStages = null;
            this.workflowMedias = [
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' }
            ];
            this.workflowStages = [
                { no: 1, name: 'Workflow Name 1' },
                { no: 2, name: 'Workflow Name 2' }
            ];
        }
        return ProjectCollaborationController;
    })();
    angular
        .module('demoApp')
        .controller('demoApp.ProjectCollaborationController', ProjectCollaborationController);
})(demoApp || (demoApp = {}));

//# sourceMappingURL=../../components/project.collaboration/project.collaboration.controller.js.map