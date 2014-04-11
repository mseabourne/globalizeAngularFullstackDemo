'use strict';
/*jslint indent: false */

angular.module('globalizeAngularFullstackApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    
    //var Globalize = require('globalize');

    $scope.menu = [{
      'title': 'Home', // Globalize.localize('buttonHome')
      'link': '/'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
