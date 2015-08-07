'use strict';

angular.module('energyFlowSankey2App')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Resources',
      'link': '/resources'
    },
    {
      'title': 'Info',
      'link': '/contact'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });