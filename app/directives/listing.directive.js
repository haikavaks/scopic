'use strict';
angular
    .module('toDoList')
    .directive('list', ['localStorageService', function (localStorageService) {
        return {
            restrict: 'E',
            scope: {
                items: '='
            },
            templateUrl: "html/listing.html",
            link: function (scope) {
                var updateLocalStorage = function () {
                    localStorageService.set('toDo', scope.items);
                };
                var getKeyByValue = function (arr, obj) {
                    var length = arr.length;
                    for (var i = 0; i < length; i++) {
                        if (arr[i] == obj) {
                            return i;
                        }
                    }
                };
                /* expand 2 level*/
                scope.show = [];
                scope.expand = function (key) {
                    scope.show[key] = !scope.show[key];
                };
                //default open first
                scope.expand(0);

                //filters
                scope.filters = [
                    {name: 'Show All', doneStatus: ''},
                    {name: 'Show only done tasks', doneStatus: true},
                    {name: 'Show undone tasks', doneStatus: false}
                ];
                scope.activeFilter = scope.activeFilter || scope.filters[0];
                scope.toggleFilter = function (filter) {
                    scope.activeFilter = filter;
                };


                scope.deleteNode = function () {
                    if (arguments.length === 1) {
                        delete scope.items[arguments[0]];
                    } else {
                        var key = getKeyByValue(scope.items[arguments[0]].children, arguments[1])
                        delete scope.items[arguments[0]].children[key];
                    }
                    updateLocalStorage();
                };
                scope.toggleDoneStatus = function (item) {
                    item.doneStatus = !item.doneStatus;
                    updateLocalStorage();
                };

                scope.model = {};
                scope.addToList = function () {
                    if (arguments.length === 0) {
                        var obj = {name: scope.model.parentModel, children: []};
                        scope.items.push(obj);
                    } else {
                        var obj = {name: scope.model.childModel, doneStatus: false};
                        scope.items[arguments[0]].children.push(obj);
                    }
                    scope.model = {};
                    updateLocalStorage();
                };
            }
        }
    }]);


