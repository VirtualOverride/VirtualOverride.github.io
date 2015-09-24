module demoApp {
    'use strict';

    class CustomersController {
        workflows: ITreeNode[] = null;

        static $inject = ['demoApp.dataService'];

        constructor(dataService: DataService) {
            dataService
                .getTreeNode()
                .then((results: ITreeNode[]) => {
                    this.workflows = results;
                });
        }
    }

    angular
        .module('demoApp')
        .controller('demoApp.CustomersController', CustomersController);
}
