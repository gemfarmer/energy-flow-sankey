'use strict';

angular.module('energyFlowSankey2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/routes/contact/contact.html',
        controller: 'ContactCtrl'
      });
  });