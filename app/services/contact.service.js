'use strict';
angular
    .module('toDoList')
    .factory('ContactCrudService', ContactCrudService)
ContactCrudService.$inject = ['DataPreload'];
function ContactCrudService(DataPreload) {
    var ContactCrudService = {};
    ContactCrudService.errorMessage = '';
    ContactCrudService.contactList = DataPreload.getData();
    ContactCrudService.delete = function (id) {
        if( this.contactList[id]){
            this.contactList.splice(id, 1);
        }else{
            this.errorMessage = 'Nothing to delete';
        }
    };
    ContactCrudService.edit = function (item, id) {
        if(this.contactList[id]){
            var obj = this.contactList[id];
            obj.name = item.name;
            obj.address = item.address;
            obj.phone = item.phone;
        }else{
            this.errorMessage = "There isnt such an index !";
        }
    };
    ContactCrudService.save = function (object) {
        if(angular.isObject(object)){
            this.contactList.push(object);
        }else {
            this.errorMessage = "Not valid data to insert";
        }
    };
    return ContactCrudService;
};

// TODO check for hasOwnProperty (name,address,phone) and specified error messages