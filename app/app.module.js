'use strict';
import './src/css/styles.1.0.2.ef0599e0b4ae2fdc662b.css';
import './src/css/app.css';
import './src/components/components.module.js';
// import './src/services/services.module.js';
// import './src/directives/directives.module.js';

const initiativeApp = angular.module('initiativeApp', [
  'app.components'
  // ,'app.services'
  // 'app.directives'
]);


import AppComponent from './src/app.component.js';

initiativeApp.component('app', AppComponent);

// initiativeApp.config([]);

// initiativeApp.run([]);
