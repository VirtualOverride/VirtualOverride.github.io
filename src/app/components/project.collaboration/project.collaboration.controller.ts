module demoApp {
	'use strict';
	
	class ProjectCollaborationController {
		
		workflowMedias: IWorkflowMedia[] = null;
		workflowStages: IWorkflowStage[] = null;
		
		constructor(){
			
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
		
	}
	
	angular
		.module('demoApp')
		.controller('demoApp.ProjectCollaborationController', ProjectCollaborationController);
}