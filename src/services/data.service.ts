module demoApp {

    export interface ICustomer {
        id: number;
        name: string;
        total: number;
    }

    export interface IOrder {
        product: string;
        total: number;
    }

    export interface ITreeNode {
        id: number;
        title: string;
        nodes: ITreeNode[];
    }

    export class DataService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        getCustomers(): ng.IPromise<ICustomer[]> {
            return this.$http.get('customers.json').then(response => {
                return response.data;
            });
        }

        getOrder(id: number): ng.IPromise<IOrder[]> {
            return this.$http.get('orders.json', { id: id }).then(response => {
               return response.data;
            });
        }

        getTreeNode(): ng.IPromise<ITreeNode[]> {
            return this.$http.get('tree.node.json').then(response => {
                return response.data;
            });
        }
    }

    angular.module('demoApp')
        .service('demoApp.dataService', DataService);

}
