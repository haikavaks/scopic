'use strict';
angular
    .module('toDoList')
    .factory('DataPreload', DataPreload)
DataPreload.$inject = [];
function DataPreload() {
    return {
        getData: function () {
            return [
                {
                    name: 'home',
                    children: [
                        {name: 'buy bread', doneStatus: false},
                        {name: 'wash plates', doneStatus: true},
                        {name: 'cook something', doneStatus:  false},
                        {name: 'clean rooms', doneStatus:  true},
                        {name: 'repair TV', doneStatus:  true}
                    ]
                },
                {
                    name: 'job',
                    children: [
                        {name: 'open mail', doneStatus: false},
                        {name: 'watch tasks', doneStatus: false},
                        {name: 'estimate time', doneStatus: false},
                        {name: 'participate in stand up', doneStatus: false},
                        {name: 'do tasks', doneStatus: false}
                    ]
                },
                {
                    name: 'holidays',
                    children: [
                        {name: 'take clothes', doneStatus:  true},
                        {name: 'get glasses', doneStatus: false},
                        {name: 'take a car', doneStatus: true},
                        {name: 'break phone', doneStatus: false},
                        {name: 'hide quickly', doneStatus: false}
                    ]
                }
            ];
        }
    };

};

