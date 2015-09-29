var demoApp;
(function (demoApp) {
    'use strict';
    var ProjectCollaborationController = (function () {
        function ProjectCollaborationController() {
            this.workflowMedias = null;
            this.workflowMedias = [
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' },
                { image: 'assets/images/u70.png', name: 'name.file_format', date: 'dd/mm/yyyy' }
            ];
        }
        return ProjectCollaborationController;
    })();
    angular
        .module('demoApp')
        .controller('demoApp.ProjectCollaborationController', ProjectCollaborationController);
})(demoApp || (demoApp = {}));

//# sourceMappingURL=../../components/project.collaboration/project.collaboration.controller.js.map