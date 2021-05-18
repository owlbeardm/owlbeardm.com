'use strict';
import 'angular';
import 'angular-ui-router';
import 'angular-sanitize';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls';
import './src/css/styles.1.0.2.ef0599e0b4ae2fdc662b.css';
import './src/css/app.css';
import './src/components/components.module.js';
// import './src/services/services.module.js';
// import './src/directives/directives.module.js';

const initiativeApp = angular.module('initiativeApp', [
  'app.components',
  'ui.router',
  'ui.bootstrap',
  'ngSanitize'
  // ,'app.services'
  // 'app.directives'
]);


import AppComponent from './src/app.component.js';

initiativeApp.component('app', AppComponent);

// initiativeApp.config([]);

// initiativeApp.run([]);
initiativeApp.config([
  '$stateProvider',
  '$locationProvider',
  '$urlRouterProvider',
  ($stateProvider, $locationProvider, $urlRouterProvider) => {

        $stateProvider.state({
          name: 'main',
          url: '/',
          component: 'main',
        });

        $stateProvider.state({
          name: 'wfrpcritical',
          url: '/wfrpcritical',
          component: 'wfrpcritical',
        });

        $stateProvider.state({
          name: 'pathfinder2ecritical',
          url: '/pathfinder2ecritical',
          component: 'pathfinder2ecritical',
        });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
  },
]);