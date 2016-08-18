'use strict';
angular
    .module('toDoList', ['LocalStorageModule'])
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('toDoList');
    });
