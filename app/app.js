/**
 * Created by Ryan on 27/01/2015.
 */

'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'ngRoute',
    'app.view1'
]);

// config
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// controller
app.controller('mainController', function($scope) {

});
