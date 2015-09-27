module demoApp.directives {

	class AddEditWorkflowStage implements ng.IDirective {

		static instance(): ng.IDirective {
            return new AddEditWorkflowStage();
        }

        restrict = 'A';
        scope = {

        };
        

        constructor(){

        }

	}

    angular
    	.module('demoApp')
		.directive('addEditWorkflowStage', AddEditWorkflowStage.instance);

}