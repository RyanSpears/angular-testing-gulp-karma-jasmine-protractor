/**
 * Created by Ryan on 27/01/2015.
 */

'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'ngRoute'
]);

// service
app.factory('peopleService', function() {

    var people = [{ Id: 1, Name: "Ryan Spears" }, { Id: 2, Name: "Max Spears" }];

    var getPeople = function() {
        return people;
    };

    return {
        getPeople : getPeople
    }
});

// controller
app.controller('peopleController', ['$scope', 'peopleService', function($scope, peopleService) {

    var vm = this;

    vm.people = [];

    activate();

    function activate() {

        vm.people = peopleService.getPeople();
    }
}]);