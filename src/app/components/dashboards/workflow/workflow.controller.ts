module demoApp {
	'use strict';
    
    interface IAccordionContent {
        header: string;
        is_open: boolean;
        template: string;
    }
		
	class WorkflowDashboard {
		workflows: ITreeNode[] = null;
        workflow_stages: IWorkflowStage[] = null;
        description: string = null; 
        accordion_contents: IAccordionContent[] = null;
      
        workflowFormStandards: IForm[] = null;
        workflowFormAdvances: IForm[] = null;
        
        workflowMedias: IWorkflowMedia[] = null;
         
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
            
            this.description = 'This is a sample description';
            
            this.accordion_contents = [
                { header: 'Description', is_open: true, template: 'app/components/dashboards/workflow/workflow-stage-content-description.html' },
                { header: 'Form', is_open: true, template: 'app/components/dashboards/workflow/workflow-stage-content-form.html' },
                { header: 'Media', is_open: true, template: 'app/components/dashboards/workflow/workflow-stage-content-media.html'}
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
	}
	
    angular
        .module('demoApp')
        .controller('demoApp.WorkflowDashboardController', WorkflowDashboard);  	
}