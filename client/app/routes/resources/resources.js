'use strict';

angular.module('energyFlowSankey2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('resources', {
        url: '/resources',
        templateUrl: 'app/routes/resources/resources.html',
        controller: 'ResourcesCtrl'
      });
  });