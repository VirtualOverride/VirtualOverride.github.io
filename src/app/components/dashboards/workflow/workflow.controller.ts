module demoApp {
	'use strict';
		
	class WorkflowDashboard {
		workflows: ITreeNode[] = null;
        workflow_stages: IWorkflowStage[] = null;
         
		static $inject = ['demoApp.dataService']; 
		
		constructor(private dataService: DataService){
            dataService
                .getTreeNode()
                .then((results: ITreeNode[]) => {
                    this.workflows = results;
                });			
                
             this.workflow_stages = [
                { no: 1, name: 'Workflow Name 1' },
                { no: 2, name: 'Workflow Name 2' }
            ];               
            
		}		
	}
	
    angular
        .module('demoApp')
        .controller('demoApp.WorkflowDashboardController', WorkflowDashboard);  	
}