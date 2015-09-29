var demoApp;
(function (demoApp) {
    var Controller = (function () {
        function Controller() {
            this.item = null;
        }
        Controller.prototype.add = function () {
        };
        return Controller;
    })();
    var AddEditWorkflowStage = (function () {
        function AddEditWorkflowStage() {
            this.template = '<span class="glyphicon glyphicon-plus"></span> ' +
                '<input type="text" aria-label="..." placeholder= "Add a new stage" > ';
            this.restrict = 'A';
            this.scope = {
                workflows: '='
            };
            this.controllerAs = 'vm';
            this.bindToController = true;
            var ;
            this.controller = function () {
                this;
                vm.item;
                IWorkflowStage = null;
                vm.add = function () {
                    vm.workflows.add(vm.item);
                    vm.item = null;
                };
            };
            this.link = function (scope, element, attrs) {
                var vm = this;
                element.keypress(function (e) {
                    var key = e.which;
                    if (key === 13) {
                        vm.controller.
                        ;
                    }
                });
            };
        }
        AddEditWorkflowStage.instance = function () {
            return new AddEditWorkflowStage();
        };
        return AddEditWorkflowStage;
    })();
    angular
        .module('demoApp')
        .directive('addEditWorkflowStage', AddEditWorkflowStage.instance);
})(demoApp || (demoApp = {}));

//# sourceMappingURL=../directives/add.workflow.stage.js.map