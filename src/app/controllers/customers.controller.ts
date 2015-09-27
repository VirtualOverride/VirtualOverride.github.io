module demoApp {
    'use strict';

    interface IWorkflowStage {
        no: number;
        name: string;
    }

    interface IWorkflowMedia {
        image: string;
        name: string;
        date: string;
    }

    interface IForm {
        id: number;
        text: string;
    }

    class CustomersController {
        workflows: ITreeNode[] = null;
        workflowStages: IWorkflowStage[] = null;
        workflowMedias: IWorkflowMedia[] = null;
        workflowFormStandards: IForm[] = null;
        workflowFormAdvances: IForm[] = null;

        static $inject = ['demoApp.dataService'];

        constructor(dataService: DataService) {
            dataService
                .getTreeNode()
                .then((results: ITreeNode[]) => {
                    this.workflows = results;
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
    }

    angular
        .module('demoApp')
        .controller('demoApp.CustomersController', CustomersController);
}
