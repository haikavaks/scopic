'use strict';
angular
    .module('toDoList')
    .directive('formAddEdit', ['ContactCrudService', function (ContactCrudService) {
        return {
            restrict: 'E',
            scope: {
                selected: '=',
                index: '='
            },
            template: '<md-content  layout-padding>' +
            '<form name="projectForm">' +
            '<md-input-container class="md-block">' +
            '<label>Name</label>' +
            '<input    md-no-asterisk name="name" ng-model="item.name">' +
            '</md-input-container>' +

            '<md-input-container class="md-block">' +
            '<label>Adress</label>' +
            '<input    name="adress" ng-model="item.address">' +
            '</md-input-container>' +

            '<md-input-container class="md-block">' +
            '<label>Phone</label>' +
            '<input  name="phone" ng-model="item.phone">' +
            '</md-input-container>' +
            '<md-button ng-if="index === null " ng-click="save(item)">ADD</md-button>' +
            '<md-button  ng-if="index !==null" ng-click="edit(item,index)">Edit</md-button>' +
            '</form>' +
            '</md-content>',
            link: function (scope, element, attrs) {
                scope.$watch('selected', function (newVal) {
                    scope.item = angular.copy(newVal);
                });
                scope.edit = function (item, index) {
                    // ToDO validation
                    ContactCrudService.edit(item, index);
                    scope.selected = {};
                    scope.index = null;
                };
                scope.save = function (obj) {
                    // ToDO validation
                    ContactCrudService.save(obj);
                    scope.selected = {};
                };
            }
        }
    }]);


