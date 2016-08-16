/**
 * Created by Avakian on 5/9/2016.
 */
angular
    .module('toDoList')
    .directive('submitAction', ['ContactCrudService', '$mdDialog', function (ContactCrudService, $mdDialog) {
        return {
            restrict: 'A',
            scope: {
                index: '=',
                callback: '&'
            },
            link: function (scope, element, attrs) {
                var callback = scope.callback();
                element.on('click', function (ev) {
                    var confirm = $mdDialog.confirm()
                        .textContent('Would you like to delete your this contact ?')
                        .targetEvent(ev)
                        .ok('Please do it!')
                        .cancel('No!');
                    $mdDialog.show(confirm).then(function () {
                        if (typeof callback == "function") {
                            callback(true, scope.index);
                        }
                    }, function () {
                        if (typeof callback == "function") {
                            callback(false, scope.index);
                        }
                    });
                });
            }
        }
    }]);