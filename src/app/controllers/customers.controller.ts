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

    class CustomersController {
        workflows: ITreeNode[] = null;
        workflowStages: IWorkflowStage[] = null;
        workflowMedias: IWorkflowMedia[] = null;

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
        }
    }

    angular
        .module('demoApp')
        .controller('demoApp.CustomersController', CustomersController);
}
