module demoApp {
	'use strict';

	interface IClient {
		id: number;
		name: string;		
	}

	interface IProjectWorkflowClient extends IClient {
		id: number;
		name: string;
	}
	
	interface IMember extends IClient {
		email: string;
		role: string;
	}
	
	class ProjectCollaborationController {
		
		workflowMedias: IWorkflowMedia[] = null;
		workflowStages: IWorkflowStage[] = null;
		project_clients: IProjectWorkflowClient[] = null;
		members: IMember[] = null;

		selected_client: string = null;
		
		constructor(){
			
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
				{ id: 2, name: "Richard"}
			];
			
			this.members = [
				{ id: 1, name: "Jack Daniels", email: "jack@daniels.com", role: "Administrator" },
				{ id: 2, name: "Richard Hennessy", email: "richard@hennessy.com", role: "Administrator" }		
			];
		}
		
	}
	
	angular
		.module('demoApp')
		.controller('demoApp.ProjectCollaborationController', ProjectCollaborationController);
}