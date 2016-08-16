/**
 * Created by Avakian on 5/8/2016.
 */
'use strict';
angular
    .module('toDoList')
    .factory('DataPreload', DataPreload)
DataPreload.$inject = [];
function DataPreload() {
    return {
        getData: function () {
            return {
                'home': [
                    {'buy bread' : 0 } ,
                    {'wash plates' : 1},
                    {'cook something' : 1},
                    {'clean rooms' : 1},
                    {'repair TV' : 1}
                ],
                'job': [
                    {'open mail': 0 },
                    {'watch tasks' : 0 } ,
                    {'estimate time': 0 },
                    {'participate in stand up': 0 } ,
                    {'do tasks': 0 }
                ],
                'holidays': [
                    {'take clothes' : 1},
                    {'get glasses' : 0} ,
                    {'take a car' : 1},
                    {'break phone' : 0} ,
                    {'hide quickly' : 1}
                ]
            }
        }
    };

};

