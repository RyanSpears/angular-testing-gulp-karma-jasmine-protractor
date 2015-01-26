/**
 * Created by Ryan on 27/01/2015.
 */

'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);