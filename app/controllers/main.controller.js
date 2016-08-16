'use strict';
angular
    .module('toDoList')
    .controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope', 'DataPreload','localStorageService'];
function MainCtrl($scope, DataPreload,localStorageService) {
    localStorageService.set('toDo', DataPreload.getData());
    $scope.toDo = localStorageService.get('toDo');
};
